import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";

// Some Windows setups fail to resolve MongoDB Atlas's "SRV" DNS records
// through the system resolver. Pointing Node directly at Google's DNS
// avoids that issue. Harmless to leave in on any OS.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/cart.js";
import wishlistRoutes from "./routes/wishlist.js";
import compareRoutes from "./routes/compare.js";
import orderRoutes from "./routes/orders.js";

dotenv.config();

const app = express();
app.use(cors());
// Default body size limit is 100kb, which is too small for a base64-encoded
// product image uploaded from the Admin page — raised to 10mb.
app.use(express.json({ limit: "10mb" }));

app.get("/", (req, res) => res.json({ status: "Clicon API is running" }));

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/compare", compareRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Missing MONGODB_URI in .env — open backend/.env and paste in your real Atlas connection string.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });
