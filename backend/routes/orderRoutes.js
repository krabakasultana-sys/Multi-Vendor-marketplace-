import express from "express";
import Order from "../models/Order.js";
import CartItem from "../models/CartItem.js";

const router = express.Router();

function generateOrderNumber() {
  const rand = Math.floor(100000 + Math.random() * 900000);
  return `#${rand}`;
}

// POST /api/orders  { sessionId, items, billing, subtotal, shipping, discount, tax, total, paymentMethod }
router.post("/", async (req, res) => {
  try {
    const { sessionId, items, billing, subtotal, shipping, discount, tax, total, paymentMethod } = req.body;

    const order = await Order.create({
      orderNumber: generateOrderNumber(),
      items,
      billing,
      subtotal,
      shipping,
      discount,
      tax,
      total,
      paymentMethod,
      status: "Order Placed",
      activity: [{ message: "Your order has been placed successfully.", date: new Date() }],
    });

    // clear the cart for this session now that the order is placed
    if (sessionId) {
      await CartItem.deleteMany({ sessionId });
    }

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/orders/track?orderNumber=%23123456&email=foo@bar.com
router.get("/track", async (req, res) => {
  try {
    const { orderNumber, email } = req.query;
    const query = { orderNumber };
    if (email) query["billing.email"] = email;
    const order = await Order.findOne(query);
    if (!order) return res.status(404).json({ error: "Order not found. Check your order ID and billing email." });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/orders/:id
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/orders/:id/status  { status: "Packaging" | "On The Road" | "Delivered" }
// This is what moves an order forward on the Track Order page.
router.put("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ["Order Placed", "Packaging", "On The Road", "Delivered"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: `status must be one of: ${validStatuses.join(", ")}` });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      {
        status,
        $push: { activity: { message: `Order status updated to "${status}".`, date: new Date() } },
      },
      { new: true }
    );
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
