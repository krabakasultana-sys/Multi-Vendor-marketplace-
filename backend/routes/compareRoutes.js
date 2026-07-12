import express from "express";
import CompareItem from "../models/CompareItem.js";

const router = express.Router();
const MAX_COMPARE = 4;

// GET /api/compare/:sessionId
router.get("/:sessionId", async (req, res) => {
  try {
    const items = await CompareItem.find({ sessionId: req.params.sessionId }).populate("product");

    // Same orphaned-reference cleanup as Cart/Wishlist — see the comment
    // in routes/cart.js for the full explanation.
    const orphaned = items.filter((item) => !item.product);
    if (orphaned.length) {
      await CompareItem.deleteMany({ _id: { $in: orphaned.map((o) => o._id) } });
    }

    res.json(items.filter((item) => item.product));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/compare  { sessionId, productId }
router.post("/", async (req, res) => {
  try {
    const { sessionId, productId } = req.body;

    const existing = await CompareItem.findOne({ sessionId, product: productId });
    if (existing) {
      const populated = await existing.populate("product");
      return res.status(200).json(populated);
    }

    const count = await CompareItem.countDocuments({ sessionId });
    if (count >= MAX_COMPARE) {
      return res.status(400).json({ error: `You can compare up to ${MAX_COMPARE} products at a time.` });
    }

    let item = await CompareItem.create({ sessionId, product: productId });
    item = await item.populate("product");
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/compare/:id  (remove a single compare row by its own _id)
router.delete("/:id", async (req, res) => {
  try {
    await CompareItem.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/compare/session/:sessionId  (clear the whole compare list)
router.delete("/session/:sessionId", async (req, res) => {
  try {
    await CompareItem.deleteMany({ sessionId: req.params.sessionId });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
