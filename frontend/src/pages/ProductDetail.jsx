import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaRegHeart, FaHeart, FaExchangeAlt, FaFacebookF, FaTwitter, FaPinterestP, FaLink } from "react-icons/fa";
import { getProduct, getProducts, addToCart, addToWishlist } from "../api";
import { useCart } from "../CartContext";
import { useCompare } from "../CompareContext";
import ShopProductCard from "../components/ShopProductCard";

const TABS = ["Description", "Additional Information", "Specification", "Review"];

// A horizontal row of product cards used for the "Related / Accessories /
// Apple / Featured" sections at the bottom of the page.
function ProductRow({ title, products }) {
  if (!products.length) return null;
  return (
    <div className="mt-8">
      <h3 className="font-semibold text-sm tracking-wide text-slate-700 mb-3">{title.toUpperCase()}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ShopProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [memory, setMemory] = useState("");
  const [storage, setStorage] = useState("");
  const [tab, setTab] = useState("Description");
  const [related, setRelated] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [appleProducts, setAppleProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const { refreshCart, refreshWishlist } = useCart();
  const { compareIds, toggleCompare } = useCompare();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct(id).then((p) => {
      setProduct(p);
      setActiveImg(0);
      setColor(p.colorOptions?.[0] || "");
      setSize(p.sizeOptions?.[0] || "");
      setMemory(p.memoryOptions?.[0] || "");
      setStorage(p.storageOptions?.[0] || "");
    });
  }, [id]);

  useEffect(() => {
    if (!product) return;
    getProducts({ category: product.category }).then((list) =>
      setRelated(list.filter((p) => p._id !== product._id).slice(0, 4))
    );
    getProducts({ category: "Computer Accessories" }).then((list) =>
      setAccessories(list.filter((p) => p._id !== product._id).slice(0, 4))
    );
    getProducts({ brand: "Apple" }).then((list) =>
      setAppleProducts(list.filter((p) => p._id !== product._id).slice(0, 4))
    );
    getProducts({ sort: "rating" }).then((list) =>
      setFeatured(list.filter((p) => p._id !== product._id).slice(0, 4))
    );
  }, [product]);

  if (!product) return <div className="max-w-6xl mx-auto px-4 py-10 text-center text-slate-400">Loading...</div>;

  const images = product.images?.length ? product.images : [product.image];
  const inWishlist = false; // wishlist "is this item in it" check happens via a dedicated fetch elsewhere in the app
  const inCompare = compareIds.includes(product._id);

  function prevImg() {
    setActiveImg((i) => (i === 0 ? images.length - 1 : i - 1));
  }
  function nextImg() {
    setActiveImg((i) => (i === images.length - 1 ? 0 : i + 1));
  }

  async function handleAddToCart() {
    await addToCart(product._id, qty);
    refreshCart();
  }

  async function handleBuyNow() {
    await addToCart(product._id, qty);
    refreshCart();
    navigate("/cart");
  }

  async function handleWishlist() {
    await addToWishlist(product._id);
    refreshWishlist();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <nav className="text-xs text-slate-500 mb-3 flex flex-wrap items-center gap-1.5">
        <span>🏠</span>
        <span>Home</span>
        <span>›</span>
        <Link to="/" className="hover:text-primary">Shop</Link>
        <span>›</span>
        <Link to="/" className="hover:text-primary">Shop Grid</Link>
        <span>›</span>
        <Link to={`/?category=${encodeURIComponent(product.category)}`} className="hover:text-primary">
          {product.category}
        </Link>
        <span>›</span>
        <span className="text-slate-700">{product.name.slice(0, 40)}{product.name.length > 40 ? "…" : ""}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border rounded p-6">
        {/* ---- Image gallery ---- */}
        <div>
          <div className="relative h-80 flex items-center justify-center border rounded mb-3 bg-white">
            {images.length > 1 && (
              <button
                onClick={prevImg}
                className="absolute left-2 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-slate-500 hover:text-primary"
                aria-label="Previous image"
              >
                <FaChevronLeft size={12} />
              </button>
            )}
            <img src={images[activeImg]} alt={product.name} className="max-h-full object-contain" />
            {images.length > 1 && (
              <button
                onClick={nextImg}
                className="absolute right-2 w-8 h-8 rounded-full bg-white border shadow flex items-center justify-center text-slate-500 hover:text-primary"
                aria-label="Next image"
              >
                <FaChevronRight size={12} />
              </button>
            )}
          </div>
          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-16 h-16 border rounded flex items-center justify-center shrink-0 ${
                    i === activeImg ? "border-accent" : "border-slate-200"
                  }`}
                >
                  <img src={img} alt="" className="max-h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ---- Details ---- */}
        <div>
          <div className="text-sm mb-2 flex items-center gap-2">
            <span className="text-accent">
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-slate-500">{product.rating.toFixed(1)} Star Rating</span>
            <span className="text-slate-400">({product.reviewCount.toLocaleString()} User feedback)</span>
          </div>

          <h1 className="text-xl font-semibold text-slate-800 mb-3">{product.name}</h1>

          <div className="grid grid-cols-2 gap-y-1 text-sm text-slate-500 mb-4">
            <span>Sku: <span className="text-slate-700">{product.sku || "—"}</span></span>
            <span>Availability: <span className={product.stock > 0 ? "text-green-600" : "text-red-500"}>{product.stock > 0 ? "In Stock" : "Out of Stock"}</span></span>
            <span>Brand: <span className="text-slate-700">{product.brand || "—"}</span></span>
            <span>Category: <span className="text-slate-700">{product.category}</span></span>
          </div>

          <div className="flex items-baseline gap-3 mb-5">
            <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <>
                <span className="text-slate-400 line-through">${product.oldPrice.toFixed(2)}</span>
                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold rounded px-2 py-0.5">
                  {product.discountPercent}% OFF
                </span>
              </>
            )}
          </div>

          {/* ---- Variant selectors (only shown when the product actually has them) ---- */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {product.colorOptions?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 mb-1.5">Color</p>
                <div className="flex gap-2">
                  {product.colorOptions.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      style={{ backgroundColor: c }}
                      className={`w-7 h-7 rounded-full border-2 ${color === c ? "border-primary" : "border-slate-200"}`}
                      aria-label={c}
                    />
                  ))}
                </div>
              </div>
            )}
            {product.sizeOptions?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 mb-1.5">Size</p>
                <select value={size} onChange={(e) => setSize(e.target.value)} className="border rounded px-2 py-1.5 text-sm w-full outline-none">
                  {product.sizeOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}
            {product.memoryOptions?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 mb-1.5">Memory</p>
                <select value={memory} onChange={(e) => setMemory(e.target.value)} className="border rounded px-2 py-1.5 text-sm w-full outline-none">
                  {product.memoryOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            )}
            {product.storageOptions?.length > 0 && (
              <div>
                <p className="text-xs text-slate-500 mb-1.5">Storage</p>
                <select value={storage} onChange={(e) => setStorage(e.target.value)} className="border rounded px-2 py-1.5 text-sm w-full outline-none">
                  {product.storageOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* ---- Quantity + Add to Cart (orange) + Buy Now (white) ---- */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center border rounded">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 text-slate-500">−</button>
              <span className="px-4 text-sm">{String(qty).padStart(2, "0")}</span>
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 text-slate-500">+</button>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-accent hover:bg-accent-dark text-white rounded py-2.5 text-sm font-medium disabled:opacity-50 flex items-center justify-center gap-2"
            >
              🛒 ADD TO CART
            </button>
            <button
              onClick={handleBuyNow}
              disabled={product.stock === 0}
              className="flex-1 bg-white border-2 border-slate-800 hover:bg-slate-50 text-slate-800 rounded py-2.5 text-sm font-medium disabled:opacity-50"
            >
              BUY NOW
            </button>
          </div>

          {/* ---- Wishlist / Compare / Share ---- */}
          <div className="flex items-center justify-between text-sm mb-5">
            <div className="flex items-center gap-4">
              <button onClick={handleWishlist} className="flex items-center gap-1.5 text-accent hover:text-accent-dark">
                <FaRegHeart /> Add to Wishlist
              </button>
              <button
                onClick={() => toggleCompare(product._id)}
                className={`flex items-center gap-1.5 ${inCompare ? "text-primary font-medium" : "text-accent hover:text-accent-dark"}`}
              >
                <FaExchangeAlt /> {inCompare ? "Added to Compare" : "Add to Compare"}
              </button>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <span className="text-xs">Share product:</span>
              <FaLink className="hover:text-primary cursor-pointer" />
              <FaFacebookF className="hover:text-primary cursor-pointer" />
              <FaTwitter className="hover:text-primary cursor-pointer" />
              <FaPinterestP className="hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs text-slate-500 mb-2">100% Guarantee Safe Checkout</p>
            <div className="flex gap-2 text-slate-400 text-2xl">
              💳 🅿️ 💰 🏦
            </div>
          </div>
        </div>
      </div>

      {/* ---- Tabs ---- */}
      <div className="bg-white border rounded mt-6">
        <div className="flex border-b overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                tab === t ? "border-accent text-accent" : "border-transparent text-slate-500 hover:text-slate-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="p-6">
          {tab === "Description" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="font-semibold text-sm mb-2">Description</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {product.description || "No description provided for this product yet."}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-sm mb-2">Feature</h3>
                <ul className="text-sm text-slate-600 space-y-1.5 mb-4">
                  {(product.features?.length ? product.features : ["Free 1 Year Warranty", "24/7 Customer support", "Secure payment method"]).map((f) => (
                    <li key={f}>✓ {f}</li>
                  ))}
                </ul>
                <h3 className="font-semibold text-sm mb-2">Shipping Information</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>Courier: 2-4 days, free shipping</li>
                  <li>Local Shipping: up to one week, $19.00</li>
                  <li>UPS Ground Shipping: 4-6 days, $29.00</li>
                  <li>Unishop Global Export: 3-4 days, $39.00</li>
                </ul>
              </div>
            </div>
          )}

          {tab === "Additional Information" && (
            <ul className="text-sm text-slate-600 space-y-1.5">
              {(product.features?.length ? product.features : ["No additional information provided."]).map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
          )}

          {tab === "Specification" && (
            <table className="text-sm w-full">
              <tbody>
                <tr className="border-b"><td className="py-2 text-slate-500 w-40">Brand</td><td className="py-2">{product.brand || "—"}</td></tr>
                <tr className="border-b"><td className="py-2 text-slate-500">SKU</td><td className="py-2">{product.sku || "—"}</td></tr>
                <tr className="border-b"><td className="py-2 text-slate-500">Category</td><td className="py-2">{product.category}</td></tr>
                {product.sizeOptions?.length > 0 && (
                  <tr className="border-b"><td className="py-2 text-slate-500">Available Sizes</td><td className="py-2">{product.sizeOptions.join(", ")}</td></tr>
                )}
                {product.memoryOptions?.length > 0 && (
                  <tr className="border-b"><td className="py-2 text-slate-500">Memory Options</td><td className="py-2">{product.memoryOptions.join(", ")}</td></tr>
                )}
                {product.storageOptions?.length > 0 && (
                  <tr className="border-b"><td className="py-2 text-slate-500">Storage Options</td><td className="py-2">{product.storageOptions.join(", ")}</td></tr>
                )}
              </tbody>
            </table>
          )}

          {tab === "Review" && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-accent text-lg">
                  {"★".repeat(Math.round(product.rating))}
                  {"☆".repeat(5 - Math.round(product.rating))}
                </span>
                <span className="text-slate-600 text-sm">{product.rating.toFixed(1)} out of 5 based on {product.reviewCount.toLocaleString()} reviews</span>
              </div>
              <p className="text-sm text-slate-400">Full review threads aren't wired up yet in this build — this tab currently just shows the aggregate rating.</p>
            </div>
          )}
        </div>
      </div>

      <ProductRow title="Related Product" products={related} />
      <ProductRow title="Product Accessories" products={accessories} />
      <ProductRow title="Apple Product" products={appleProducts} />
      <ProductRow title="Featured Products" products={featured} />
    </div>
  );
}
