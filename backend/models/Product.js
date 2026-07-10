import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, default: "" },
    category: { type: String, required: true, index: true },
    sku: { type: String, default: "" },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: null },
    discountPercent: { type: Number, default: 0 },
    image: { type: String, required: true },
    images: { type: [String], default: [] },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    stock: { type: Number, default: 100 },
    description: { type: String, default: "" },
    features: { type: [String], default: [] },
    badge: { type: String, default: "" }, // e.g. "SALE", "NEW", "HOT"
    // Optional variant selectors shown on the product detail page. Left empty
    // ([]) for products that don't need that selector — e.g. headphones
    // won't have storageOptions, but a laptop will.
    colorOptions: { type: [String], default: [] }, // hex codes, e.g. "#1f2937"
    sizeOptions: { type: [String], default: [] },
    memoryOptions: { type: [String], default: [] },
    storageOptions: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
