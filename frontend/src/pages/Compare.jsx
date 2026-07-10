import { Link } from "react-router-dom";
import { addToCart } from "../api";
import { useCompare } from "../CompareContext";
import { useCart } from "../CartContext";

export default function Compare() {
  const { compareItems, removeFromCompare, clearCompare } = useCompare();
  const { refreshCart } = useCart();
  const products = compareItems.map((item) => item.product);

  async function handleAddToCart(productId) {
    await addToCart(productId, 1);
    refreshCart();
  }

  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-xl font-semibold mb-2">Compare Products</h1>
        <p className="text-slate-500 mb-4">
          You haven't added anything to compare yet. Browse products and use the "Compare" button on any product
          card to add it here (up to 4 at a time).
        </p>
        <Link to="/" className="text-primary font-medium">
          Browse products →
        </Link>
      </div>
    );
  }

  // Rows use the fields every product actually has, so this works for any
  // category without needing category-specific spec fields (e.g. no
  // "screen size" field exists in the schema, so it's left out rather than
  // showing a fake/empty row).
  const rows = [
    { label: "Price", render: (p) => `$${p.price.toFixed(2)}` },
    {
      label: "Discount",
      render: (p) => (p.oldPrice ? `$${p.oldPrice.toFixed(2)} (was)` : "—"),
    },
    { label: "Category", render: (p) => p.category },
    { label: "Brand", render: (p) => p.brand || "—" },
    {
      label: "Rating",
      render: (p) => `${"★".repeat(Math.round(p.rating))}${"☆".repeat(5 - Math.round(p.rating))} (${p.reviewCount})`,
    },
    {
      label: "Stock",
      render: (p) => (p.stock > 0 ? <span className="text-green-600">In Stock</span> : <span className="text-red-500">Out of Stock</span>),
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">Compare Products ({products.length})</h1>
        <button onClick={clearCompare} className="text-sm text-red-500 hover:underline">
          Clear all
        </button>
      </div>

      <div className="bg-white border rounded overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr>
              <th className="p-4 text-left text-slate-400 font-normal w-32">&nbsp;</th>
              {products.map((p) => (
                <th key={p._id} className="p-4 align-top">
                  <div className="relative">
                    <button
                      onClick={() => removeFromCompare(p._id)}
                      className="absolute -top-2 -right-2 text-slate-400 hover:text-red-500"
                      title="Remove from comparison"
                    >
                      ✕
                    </button>
                    <Link to={`/product/${p._id}`} className="block">
                      <div className="h-24 flex items-center justify-center mb-2">
                        <img src={p.image} alt={p.name} className="max-h-full object-contain" />
                      </div>
                      <p className="text-slate-700 font-medium line-clamp-2 text-center">{p.name}</p>
                    </Link>
                    {p.stock > 0 && (
                      <button
                        onClick={() => handleAddToCart(p._id)}
                        className="mt-2 w-full bg-primary hover:bg-primary-dark text-white text-xs rounded px-3 py-1.5"
                      >
                        ADD TO CART
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t">
                <td className="p-4 text-slate-500 font-medium align-top whitespace-nowrap">{row.label}</td>
                {products.map((p) => (
                  <td key={p._id} className="p-4 align-top text-center">
                    {row.render(p)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
