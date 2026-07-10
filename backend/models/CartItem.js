import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, index: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
  },
  { timestamps: true }
);

cartItemSchema.index({ sessionId: 1, product: 1 }, { unique: true });

export default mongoose.model("CartItem", cartItemSchema);
