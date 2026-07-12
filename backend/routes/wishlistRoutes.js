import express from "express";
import WishlistItem from "../models/WishlistItem.js";

const router = express.Router();

// GET /api/wishlist/:sessionId
router.get("/:sessionId", async (req, res) => {
  try {
    const items = await WishlistItem.find({ sessionId: req.params.sessionId }).populate("product");

    // Same orphaned-reference cleanup as Cart — see the comment there.
    const orphaned = items.filter((item) => !item.product);
    if (orphaned.length) {
      await WishlistItem.deleteMany({ _id: { $in: orphaned.map((o) => o._id) } });
    }

    res.json(items.filter((item) => item.product));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/wishlist  { sessionId, productId }
router.post("/", async (req, res) => {
  try {
    const { sessionId, productId } = req.body;
    let item = await WishlistItem.findOne({ sessionId, product: productId });
    if (!item) {
      item = await WishlistItem.create({ sessionId, product: productId });
    }
    item = await item.populate("product");
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/wishlist/:id
router.delete("/:id", async (req, res) => {
  try {
    await WishlistItem.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
