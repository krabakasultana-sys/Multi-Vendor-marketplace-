import express from "express";
import CartItem from "../models/CartItem.js";

const router = express.Router();

// GET /api/cart/:sessionId
router.get("/:sessionId", async (req, res) => {
  try {
    const items = await CartItem.find({ sessionId: req.params.sessionId }).populate("product");

    // A cart row can end up pointing at a product that no longer exists —
    // e.g. after re-running the seed script, which replaces every product
    // with a brand-new database ID. Rather than send the frontend a broken
    // row (product: null) that would crash on render, quietly delete it here
    // and only return the rows that still resolve to a real product.
    const orphaned = items.filter((item) => !item.product);
    if (orphaned.length) {
      await CartItem.deleteMany({ _id: { $in: orphaned.map((o) => o._id) } });
    }

    res.json(items.filter((item) => item.product));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/cart  { sessionId, productId, quantity }
router.post("/", async (req, res) => {
  try {
    const { sessionId, productId, quantity = 1 } = req.body;
    let item = await CartItem.findOne({ sessionId, product: productId });
    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = await CartItem.create({ sessionId, product: productId, quantity });
    }
    item = await item.populate("product");
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /api/cart/:id  { quantity }
router.put("/:id", async (req, res) => {
  try {
    const item = await CartItem.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    ).populate("product");
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/cart/:id
router.delete("/:id", async (req, res) => {
  try {
    await CartItem.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
