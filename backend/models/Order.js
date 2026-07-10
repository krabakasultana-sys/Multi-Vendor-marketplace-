import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    name: String,
    image: String,
    price: Number,
    quantity: { type: Number, default: 1 },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true, index: true },
    items: { type: [orderItemSchema], required: true },
    billing: {
      firstName: String,
      lastName: String,
      companyName: String,
      address: String,
      country: String,
      region: String,
      city: String,
      zipCode: String,
      email: { type: String, index: true },
      phone: String,
    },
    subtotal: Number,
    shipping: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    tax: Number,
    total: Number,
    paymentMethod: { type: String, default: "Cash on Delivery" },
    status: {
      type: String,
      enum: ["Order Placed", "Packaging", "On The Road", "Delivered"],
      default: "Order Placed",
    },
    activity: [
      {
        message: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
