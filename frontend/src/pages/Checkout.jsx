import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../api";
import { useCart } from "../CartContext";

const initialForm = {
  firstName: "",
  lastName: "",
  companyName: "",
  address: "",
  country: "",
  region: "",
  city: "",
  zipCode: "",
  email: "",
  phone: "",
};

export default function Checkout() {
  const { cartItems, refreshCart } = useCart();
  const storedUser = JSON.parse(localStorage.getItem("user") || "null");
  const [form, setForm] = useState({
    ...initialForm,
    firstName: storedUser?.name?.split(" ")[0] || "",
    lastName: storedUser?.name?.split(" ").slice(1).join(" ") || "",
    email: storedUser?.email || "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + (item.product?.price || 0) * item.quantity, 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handlePlaceOrder(e) {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setSubmitting(true);
    setError(null);
    try {
      const items = cartItems.map((item) => ({
        product: item.product._id,
        name: item.product.name,
        image: item.product.image,
        price: item.product.price,
        quantity: item.quantity,
      }));
      const order = await placeOrder({
        items,
        billing: form,
        subtotal,
        shipping,
        discount: 0,
        tax,
        total,
        paymentMethod,
      });
      refreshCart();
      navigate("/order-success", { state: { order } });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border rounded p-5">
          <h3 className="font-semibold mb-4">Billing Information</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              required
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
            <input
              required
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>
          <input
            placeholder="Company Name (Optional)"
            value={form.companyName}
            onChange={(e) => update("companyName", e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full mb-4"
          />
          <input
            required
            placeholder="Address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full mb-4"
          />
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              required
              placeholder="Country"
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
            <input
              placeholder="Region / State"
              value={form.region}
              onChange={(e) => update("region", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
            <input
              required
              placeholder="City"
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
            <input
              placeholder="Zip Code"
              value={form.zipCode}
              onChange={(e) => update("zipCode", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              required
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
            <input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="border rounded px-3 py-2 text-sm"
            />
          </div>

          <h3 className="font-semibold mb-3">Payment Option</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Credit Card", "Debit Card", "PayPal", "Cash on Delivery"].map((method) => (
              <button
                type="button"
                key={method}
                onClick={() => setPaymentMethod(method)}
                className={`border rounded px-4 py-2 text-sm ${
                  paymentMethod === method ? "border-primary text-primary bg-blue-50" : "text-slate-600"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded p-4 h-fit">
          <h3 className="font-semibold mb-3">Order Summary</h3>
          {cartItems.map((item) => (
            <div key={item._id} className="flex justify-between text-sm py-1">
              <span className="line-clamp-1">
                {item.product?.name} × {item.quantity}
              </span>
              <span>${((item.product?.price || 0) * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between text-sm py-2 border-t mt-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold py-3">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
          <button
            disabled={submitting || cartItems.length === 0}
            className="w-full bg-accent hover:bg-accent-dark text-white rounded py-2 text-sm font-medium disabled:opacity-50"
          >
            {submitting ? "Placing Order..." : "PLACE ORDER →"}
          </button>
        </div>
      </form>
    </div>
  );
}
