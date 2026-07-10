import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import Product from "./models/Product.js";

dotenv.config();

// Use Google's DNS directly — avoids the Windows SRV-lookup issue some setups hit.
dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Every "image" below points at a file you will add yourself in:
//   frontend/public/images/
// Nothing shows up until you actually place a matching file there — that's expected.
//
// ============================================================================
// HOW TO EDIT THIS FILE — you can change absolutely everything below by hand.
// ============================================================================
// This is a plain JavaScript array. Each { ... } block is one product. To
// change a product: edit the value after the colon. To add a new product:
// copy an existing { ... } block, paste it (remember the comma after the
// closing "}"), and change the values. To remove one: delete its whole
// { ... } block (including its trailing comma).
//
// Field reference (all are optional except name, category, price, image):
//   name              - String. Product title shown everywhere.
//   brand             - String. Shown on the detail page, used for the
//                        "Apple Product" row too (matches by exact brand name).
//   category          - String. MUST exactly match one of the categories in
//                        the sidebar (see frontend/src/components/Sidebar.jsx,
//                        FALLBACK_CATEGORIES) or it won't show up when someone
//                        filters by category. Typos here are the #1 cause of
//                        "why don't my products show up when I click a category".
//   sku               - String. Shown on the product detail page.
//   price             - Number. Current selling price.
//   oldPrice          - Number or omit entirely. Set this to show a strike-
//                        through original price (used with discountPercent).
//   discountPercent   - Number, e.g. 21 for "21% OFF". Only shown if oldPrice
//                        is also set.
//   image             - String. Path to the main product image, e.g.
//                        "/images/1st.png" — file must exist in
//                        frontend/public/images/.
//   images            - Array of strings, e.g. ["/images/1st.png", "/images/4th.png"].
//                        Extra photos shown in the thumbnail gallery on the
//                        product detail page. Omit entirely to just use "image".
//   rating            - Number 0–5, e.g. 4.5. Shown as stars.
//   reviewCount       - Number, e.g. 21671. Shown next to the star rating.
//   stock             - Number. Set to 0 to show "Out of Stock" and disable
//                        the Add to Cart / Buy Now buttons. Omit for default (100).
//   description       - String. Shown in the "Description" tab.
//   features          - Array of strings, e.g. ["Free 1 Year Warranty", ...].
//                        Shown as a checklist on the detail page.
//   badge             - String: "SALE", "NEW", "HOT", "OUT OF STOCK", or "" for none.
//   colorOptions      - Array of hex color strings, e.g. ["#111827", "#f5f5f0"].
//                        Only shown if non-empty — omit for products with no
//                        color choice (e.g. a cable).
//   sizeOptions       - Array of strings, e.g. ["41mm", "45mm"]. Same rule —
//                        only appears if non-empty.
//   memoryOptions     - Array of strings, e.g. ["16GB unified memory", "32GB unified memory"].
//   storageOptions    - Array of strings, e.g. ["256GB SSD Storage", "512GB SSD Storage"].
//
// After editing anything in this file, re-run from the backend folder:
//     npm run seed
// This WIPES the current products collection and reloads it from this file —
// so this file is the single source of truth for your starting catalog. Any
// products you added later through the Admin page (/admin) will also be
// wiped by this, since re-seeding replaces the whole collection. If you want
// to keep Admin-added products, edit them here instead of re-seeding, or add
// them through /admin without ever running `npm run seed` again.
// ============================================================================
const products = [
  {
    name: "2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray",
    brand: "Apple",
    category: "Computer & Laptop",
    sku: "A264671",
    price: 1699.0,
    oldPrice: 1999.0,
    discountPercent: 21,
    image: "/images/1st.png",
    images: [
      "/images/1st.png",
      "/images/4th.png",
      "/images/11th.png",
      "/images/16th.png",
    ],
    rating: 4.7,
    reviewCount: 21671,
    description:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip, you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need.",
    features: ["Free 1 Year Warranty", "Free Shipping & Fasted Delivery", "100% Money-back guarantee", "24/7 Customer support", "Secure payment method"],
    badge: "SALE",
    colorOptions: ["#8e8e93", "#f5f5f0"],
    sizeOptions: ["14-inch Liquid Retina XDR display", "16-inch Liquid Retina XDR display"],
    memoryOptions: ["16GB unified memory", "32GB unified memory"],
    storageOptions: ["512GB SSD Storage", "1TB SSD Storage"],
  },
  {
    name: "Samsung Electronics Galaxy Bluetooth Headphones",
    brand: "Samsung",
    category: "Headphone",
    sku: "SGH-8821",
    price: 89.0,
    oldPrice: 120.0,
    discountPercent: 25,
    image: "/images/2nd.png",
    rating: 4.2,
    reviewCount: 18,
    description: "Premium wireless headphones with active noise cancellation and 20-hour battery life.",
    badge: "SALE",
    colorOptions: ["#111827", "#e5e7eb"],
  },
  {
    name: "Amazon Basics High-Speed HDMI Cable with Ethernet",
    brand: "Amazon Basics",
    category: "Computer Accessories",
    sku: "AB-HDMI-6FT",
    price: 15.0,
    image: "/images/3rd.png",
    rating: 4.0,
    reviewCount: 9,
  },
  {
    name: "MacBook Air 13-inch Retina Display",
    brand: "Apple",
    category: "Computer & Laptop",
    sku: "MBA13-2021",
    price: 999.0,
    image: "/images/4th.png",
    rating: 4.7,
    reviewCount: 54,
    badge: "NEW",
    colorOptions: ["#8e8e93", "#f5f5f0", "#fbcfe8"],
    memoryOptions: ["8GB unified memory", "16GB unified memory"],
    storageOptions: ["256GB SSD Storage", "512GB SSD Storage"],
  },
  {
    name: "Toshiba HDR Smart LED 4K TV 55-inch",
    brand: "Toshiba",
    category: "TV & Home Appliances",
    sku: "TOS-55U-4K",
    price: 649.0,
    oldPrice: 799.0,
    discountPercent: 19,
    image: "/images/5th.png",
    rating: 4.3,
    reviewCount: 41,
  },
  {
    name: "Nike Drone with 4K Camera and GPS",
    brand: "Nike",
    category: "GPS & Navigation",
    sku: "NK-DRN-4KGPS",
    price: 899.0,
    image: "/images/6th.png",
    rating: 4.1,
    reviewCount: 12,
    badge: "SALE",
  },
  {
    name: "Wireless Gaming Headphones with Charging Dock",
    brand: "Sony",
    category: "Gaming Console",
    sku: "SNY-WGH-DOCK",
    price: 129.0,
    image: "/images/7th.png",
    rating: 4.6,
    reviewCount: 76,
    badge: "HOT",
    colorOptions: ["#111827", "#dc2626"],
  },
  {
    name: "TCL 55-inch 4K Smart Television",
    brand: "TCL",
    category: "TV & Home Appliances",
    sku: "TCL-55S-4K",
    price: 549.0,
    image: "/images/8th.png",
    rating: 4.4,
    reviewCount: 63,
  },
  {
    name: "Portable Folding Machine, Fully Automatic",
    brand: "Generic",
    category: "TV & Home Appliances",
    sku: "GEN-PFM-11",
    price: 199.0,
    image: "/images/9th.png",
    rating: 3.9,
    reviewCount: 5,
  },
  {
    name: "72Q3 UV Techno Sports Headphones with Wireless Charging",
    brand: "Techno",
    category: "Wearable Technology",
    sku: "TQ3-UVWC-72",
    price: 79.0,
    oldPrice: 105.0,
    discountPercent: 25,
    image: "/images/10th.png",
    rating: 4.0,
    reviewCount: 27,
    badge: "OUT OF STOCK",
    stock: 0,
  },
  {
    name: "Ryzen Gam Comp Turbulence Motherboard Track Series",
    brand: "Ryzen",
    category: "Computer Accessories",
    sku: "RYZ-MB-TS9",
    price: 349.0,
    image: "/images/11th.png",
    rating: 4.3,
    reviewCount: 22,
  },
  {
    name: "iPhone 12 Pro Max 256GB Space Gray",
    brand: "Apple",
    category: "SmartPhone",
    sku: "IP12PM-256SG",
    price: 1099.0,
    image: "/images/12th.png",
    rating: 4.8,
    reviewCount: 210,
    badge: "SALE",
    colorOptions: ["#1f2937", "#c0c0c0", "#d4af37"],
    storageOptions: ["128GB Storage", "256GB Storage", "512GB Storage"],
  },
  {
    name: "Samsung Galaxy S21 Ultra 5G, 128GB, Phantom Black",
    brand: "Samsung",
    category: "SmartPhone",
    sku: "SGS21U-128PB",
    price: 999.0,
    image: "/images/13th.png",
    rating: 4.6,
    reviewCount: 145,
    colorOptions: ["#111827", "#9ca3af"],
    storageOptions: ["128GB Storage", "256GB Storage"],
  },
  {
    name: "Full HD 1080p Webcam with Built-in Microphone",
    brand: "Logitech",
    category: "Computer Accessories",
    sku: "LGT-WC-1080",
    price: 45.0,
    image: "/images/14th.png",
    rating: 4.2,
    reviewCount: 33,
  },
  {
    name: "Wireless Photo Printer, Compact and Portable",
    brand: "Canon",
    category: "Camera & Photo",
    sku: "CAN-WPP-C1",
    price: 129.0,
    image: "/images/15th.png",
    rating: 4.0,
    reviewCount: 19,
  },
  {
    name: "Apple Watch Series 7 GPS, 45mm Aluminum Case",
    brand: "Apple",
    category: "Watches & Accessories",
    sku: "AWS7-45-GPS",
    price: 299.0,
    oldPrice: 399.0,
    discountPercent: 25,
    image: "/images/16th.png",
    rating: 4.7,
    reviewCount: 5310,
    description: "Heavy on features, light on price. The largest, most advanced Always-On Retina display yet.",
    badge: "NEW",
    colorOptions: ["#111827", "#dc2626", "#16a34a"],
    sizeOptions: ["41mm", "45mm"],
  },
  {
    name: "Anker PowerCore 20000mAh Portable Charger",
    brand: "Anker",
    category: "Mobile Accessories",
    sku: "ANK-PC20K",
    price: 39.0,
    oldPrice: 55.0,
    discountPercent: 29,
    image: "/images/17th.png",
    rating: 4.5,
    reviewCount: 88,
    colorOptions: ["#111827", "#2563eb"],
  },  {
    name: "Dell XPS 15 Laptop, Intel i7, 16GB RAM, 512GB SSD",
    brand: "Dell",
    category: "Computer & Laptop",
    sku: "DXP15-I7-512",
    price: 1399.0,
    oldPrice: 1599.0,
    discountPercent: 13,
    image: "/images/18th.png",
    rating: 4.5,
    reviewCount: 87,
    colorOptions: ["#111827", "#9ca3af"],
    memoryOptions: ["16GB", "32GB"],
    storageOptions: ["512GB SSD", "1TB SSD"],
  },
  {
    name: "Logitech MX Master 3 Wireless Mouse",
    brand: "Logitech",
    category: "Computer Accessories",
    sku: "LGT-MXM3",
    price: 99.0,
    image: "/images/19th.png",
    rating: 4.7,
    reviewCount: 302,
    badge: "HOT",
  },
  {
    name: "Google Pixel 7 Pro 128GB Obsidian",
    brand: "Google",
    category: "SmartPhone",
    sku: "GPX7P-128OB",
    price: 799.0,
    oldPrice: 899.0,
    discountPercent: 11,
    image: "/images/20th.png",
    rating: 4.6,
    reviewCount: 156,
    badge: "SALE",
    colorOptions: ["#111827", "#e5e7eb"],
    storageOptions: ["128GB", "256GB"],
  },
  {
    name: "Bose QuietComfort 45 Noise Cancelling Headphones",
    brand: "Bose",
    category: "Headphone",
    sku: "BOSE-QC45",
    price: 279.0,
    oldPrice: 329.0,
    discountPercent: 15,
    image: "/images/21st.png",
    rating: 4.8,
    reviewCount: 421,
    colorOptions: ["#111827", "#f5f5f0"],
  },
  {
    name: "Anker Wireless Charging Stand, 15W Fast Charge",
    brand: "Anker",
    category: "Mobile Accessories",
    sku: "ANK-WCS-15W",
    price: 25.0,
    image: "/images/22nd.png",
    rating: 4.3,
    reviewCount: 64,
  },
  {
    name: "Xbox Series X Console, 1TB",
    brand: "Microsoft",
    category: "Gaming Console",
    sku: "XBX-SX-1TB",
    price: 499.0,
    image: "/images/23rd.png",
    rating: 4.9,
    reviewCount: 512,
    badge: "HOT",
  },
  {
    name: "Sony Alpha a7 III Mirrorless Camera",
    brand: "Sony",
    category: "Camera & Photo",
    sku: "SNY-A7III",
    price: 1998.0,
    oldPrice: 2199.0,
    discountPercent: 9,
    image: "/images/24th.png",
    rating: 4.8,
    reviewCount: 190,
  },
  {
    name: "LG 65-inch OLED 4K Smart TV",
    brand: "LG",
    category: "TV & Home Appliances",
    sku: "LG-65OLED",
    price: 1799.0,
    oldPrice: 2099.0,
    discountPercent: 14,
    image: "/images/25th.png",
    rating: 4.7,
    reviewCount: 233,
    badge: "SALE",
  },
  {
    name: "Garmin Fenix 7 GPS Multisport Watch",
    brand: "Garmin",
    category: "GPS & Navigation",
    sku: "GRM-FNX7",
    price: 699.0,
    image: "/images/26th.png",
    rating: 4.6,
    reviewCount: 98,
    colorOptions: ["#111827", "#4b5563"],
  },
  {
    name: "Samsung Galaxy Watch 6, 44mm Bluetooth",
    brand: "Samsung",
    category: "Watches & Accessories",
    sku: "SGW6-44BT",
    price: 329.0,
    oldPrice: 379.0,
    discountPercent: 13,
    image: "/images/27th.png",
    rating: 4.5,
    reviewCount: 140,
    colorOptions: ["#111827", "#d4af37"],
    sizeOptions: ["40mm", "44mm"],
  },
  {
    name: "Fitbit Charge 6 Fitness Tracker",
    brand: "Fitbit",
    category: "Wearable Technology",
    sku: "FTB-CHG6",
    price: 159.0,
    image: "/images/28th.png",
    rating: 4.3,
    reviewCount: 220,
    colorOptions: ["#111827", "#dc2626"],
  },
  {
    name: "Asus ROG Strix Gaming Motherboard, ATX",
    brand: "Asus",
    category: "Computer Accessories",
    sku: "ASU-ROGSTX",
    price: 279.0,
    image: "/images/29th.png",
    rating: 4.4,
    reviewCount: 71,
  },
  {
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    brand: "JBL",
    category: "Mobile Accessories",
    sku: "JBL-FLIP6",
    price: 129.0,
    oldPrice: 149.0,
    discountPercent: 13,
    image: "/images/30th.png",
    rating: 4.6,
    reviewCount: 315,
    badge: "NEW",
    colorOptions: ["#111827", "#dc2626", "#2563eb"],
  },

];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected. Clearing existing products...");
  await Product.deleteMany({});
  console.log("Inserting sample products...");
  await Product.insertMany(products);
  console.log(`Seeded ${products.length} products.`);
  console.log("Reminder: images will look broken until you add matching files to");
  console.log("frontend/public/images/ — see the README.md in that folder.");
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
