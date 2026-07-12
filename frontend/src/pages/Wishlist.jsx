import { Link } from "react-router-dom";
import { addToCart, removeWishlistItem } from "../api";
import { useCart } from "../CartContext";
import Sidebar from "../components/Sidebar";

export default function Wishlist() {
  const { wishlistItems, refreshWishlist, refreshCart } = useCart();

  async function moveToCart(item) {
    await addToCart(item.product._id, 1);
    await removeWishlistItem(item._id);
    refreshCart();
    refreshWishlist();
  }

  async function remove(item) {
    await removeWishlistItem(item._id);
    refreshWishlist();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 items-start">
      <Sidebar />

      <main className="flex-1 w-full">
      <h1 className="text-xl font-semibold mb-4">Wishlist ({wishlistItems.length})</h1>

      {wishlistItems.length === 0 ? (
        <div className="bg-white border rounded p-10 text-center text-slate-500">
          Your wishlist is empty. <Link to="/" className="text-primary">Browse products</Link>
        </div>
      ) : (
        <div className="bg-white border rounded overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead className="bg-slate-50 text-slate-500 text-left">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock Status</th>
                <th className="p-3">Action</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item._id} className="border-t">
                  <td className="p-3 flex items-center gap-3">
                    <img src={item.product?.image} alt="" className="w-12 h-12 object-contain" />
                    <span className="line-clamp-2">{item.product?.name}</span>
                  </td>
                  <td className="p-3">${item.product?.price.toFixed(2)}</td>
                  <td className="p-3">
                    {item.product?.stock > 0 ? (
                      <span className="text-green-600">In Stock</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => moveToCart(item)}
                      disabled={item.product?.stock === 0}
                      className="bg-primary text-white text-xs rounded px-3 py-1.5 disabled:opacity-50"
                    >
                      ADD TO CART
                    </button>
                  </td>
                  <td className="p-3">
                    <button onClick={() => remove(item)} className="text-red-400 hover:text-red-600">
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </main>
    </div>
  );
}
