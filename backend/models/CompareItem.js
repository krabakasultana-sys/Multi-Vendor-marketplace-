import mongoose from "mongoose";

// Same shape as WishlistItem: one row per (session, product) pair.
// A unique compound index stops the same product being added twice for the
// same session, so we don't need to check-then-insert in application code.
const compareItemSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  },
  { timestamps: true }
);

compareItemSchema.index({ sessionId: 1, product: 1 }, { unique: true });

export default mongoose.model("CompareItem", compareItemSchema);
