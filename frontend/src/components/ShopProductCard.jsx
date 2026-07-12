import { Link } from "react-router-dom";
import { addToCart, addToWishlist } from "../api";
import { useCart } from "../CartContext";
import { useCompare } from "../CompareContext";

export default function ProductCard({ product }) {
  const { refreshCart, refreshWishlist } = useCart();
  const { compareIds, toggleCompare } = useCompare();
  const inCompare = compareIds.includes(product._id);

  async function handleAddToCart(e) {
    e.preventDefault();
    await addToCart(product._id, 1);
    refreshCart();
  }

  async function handleWishlist(e) {
    e.preventDefault();
    await addToWishlist(product._id);
    refreshWishlist();
  }

  function handleCompare(e) {
    e.preventDefault();
    toggleCompare(product._id);
  }

  return (
    <Link
      to={`/product/${product._id}`}
      className="bg-white border rounded p-3 flex flex-col hover:shadow-md transition-shadow relative group"
    >
      {product.badge && (
        <span
          className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded text-white ${
            product.badge === "SALE"
              ? "bg-red-500"
              : product.badge === "NEW"
              ? "bg-primary"
              : product.badge === "OUT OF STOCK"
              ? "bg-slate-400"
              : "bg-accent"
          }`}
        >
          {product.badge}
        </span>
      )}
      <button
        onClick={handleWishlist}
        className="absolute top-2 right-2 text-slate-400 hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity"
        title="Add to wishlist"
      >
        ♡
      </button>
      <button
        onClick={handleCompare}
        className={`absolute top-8 right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity ${
          inCompare ? "text-accent opacity-100" : "text-slate-400 hover:text-accent"
        }`}
        title={inCompare ? "Remove from compare" : "Add to compare"}
      >
        ⇄
      </button>
      <div className="h-32 flex items-center justify-center mb-2">
        <img src={product.image} alt={product.name} className="max-h-full object-contain" />
      </div>
      <div className="star-rating text-xs mb-1">
        {"★".repeat(Math.round(product.rating))}
        {"☆".repeat(5 - Math.round(product.rating))}
        <span className="text-slate-400"> ({product.reviewCount})</span>
      </div>
      <p className="text-sm text-slate-700 line-clamp-2 mb-2 min-h-[2.5em]">{product.name}</p>
      <div className="mt-auto flex items-center justify-between">
        <div>
          <span className="text-primary font-semibold">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-slate-400 text-xs line-through ml-1">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        {product.stock !== 0 && (
          <button
            onClick={handleAddToCart}
            className="text-xs bg-accent hover:bg-accent-dark text-white px-2 py-1 rounded transition-colors"
          >
            + Cart
          </button>
        )}
      </div>
    </Link>
  );
}
