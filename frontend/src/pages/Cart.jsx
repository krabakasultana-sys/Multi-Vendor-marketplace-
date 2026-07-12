import { Link, useNavigate } from "react-router-dom";
import { updateCartItem, removeCartItem } from "../api";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cartItems, refreshCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  async function changeQty(item, delta) {
    const newQty = item.quantity + delta;
    if (newQty < 1) return;
    await updateCartItem(item._id, newQty);
    refreshCart();
  }

  async function remove(item) {
    await removeCartItem(item._id);
    refreshCart();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="bg-white border rounded p-10 text-center text-slate-500">
          Your cart is empty. <Link to="/" className="text-primary">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white border rounded overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-slate-50 text-slate-500 text-left">
                <tr>
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id} className="border-t">
                    <td className="p-3 flex items-center gap-3">
                      <img src={item.product?.image} alt="" className="w-12 h-12 object-contain" />
                      <span className="line-clamp-2">{item.product?.name}</span>
                    </td>
                    <td className="p-3">${item.product?.price.toFixed(2)}</td>
                    <td className="p-3">
                      <div className="flex items-center border rounded w-fit">
                        <button onClick={() => changeQty(item, -1)} className="px-2">
                          −
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button onClick={() => changeQty(item, 1)} className="px-2">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-3 font-medium">${((item.product?.price || 0) * item.quantity).toFixed(2)}</td>
                    <td className="p-3">
                      <button onClick={() => remove(item)} className="text-red-400 hover:text-red-600">
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-3 flex justify-between">
              <Link to="/" className="text-sm border rounded px-4 py-2 hover:bg-slate-50">
                ← Return to shop
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded p-4 h-fit">
            <h3 className="font-semibold mb-3">Cart Totals</h3>
            <div className="flex justify-between text-sm py-2 border-b">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold py-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-accent hover:bg-accent-dark text-white rounded py-2 text-sm font-medium"
            >
              PROCEED TO CHECKOUT →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
