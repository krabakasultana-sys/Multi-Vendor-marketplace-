import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackOrder } from "../api";
import Sidebar from "../components/Sidebar";

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleTrack(e) {
    e.preventDefault();
    setError(null);
    try {
      const order = await trackOrder(orderId, email);
      navigate(`/order/${order._id}`);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-6 items-start">
      <Sidebar />

      <main className="flex-1 w-full max-w-xl">
      <h1 className="text-xl font-semibold mb-2">Track Order</h1>
      <p className="text-sm text-slate-500 mb-6">
        To track your order please enter your Order ID in the box below and press the "Track Order" button. This
        was given to you on your receipt and in the confirmation email you should have received.
      </p>
      <form onSubmit={handleTrack} className="bg-white border rounded p-5 space-y-4">
        <div>
          <label className="text-sm text-slate-600 block mb-1">Order ID</label>
          <input
            required
            placeholder="e.g. #123456"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          />
        </div>
        <div>
          <label className="text-sm text-slate-600 block mb-1">Billing Email</label>
          <input
            required
            type="email"
            placeholder="Email used to place the order"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full"
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button className="bg-accent hover:bg-accent-dark text-white rounded px-6 py-2 text-sm font-medium">
          TRACK ORDER →
        </button>
      </form>
      </main>
    </div>
  );
}
