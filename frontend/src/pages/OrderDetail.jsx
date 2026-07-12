import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder, updateOrderStatus } from "../api";

const STEPS = ["Order Placed", "Packaging", "On The Road", "Delivered"];

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, [id]);

  if (!order) return <div className="max-w-4xl mx-auto px-4 py-10">Loading...</div>;

  const currentStepIndex = STEPS.indexOf(order.status);

  async function handleStatusChange(step) {
    setUpdating(true);
    try {
      const updated = await updateOrderStatus(order._id, step);
      setOrder(updated);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-orange-50 border border-orange-100 rounded p-5 mb-6 flex flex-col sm:flex-row justify-between items-start gap-3">
        <div>
          <h2 className="font-semibold text-lg">{order.orderNumber}</h2>
          <p className="text-sm text-slate-500">
            {order.items.length} Products · Order Placed{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>
        <span className="text-xl font-semibold text-accent">${order.total?.toFixed(2)}</span>
      </div>

      <div className="bg-white border rounded p-6 mb-6">
        <div className="flex justify-between relative mb-6">
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-slate-200 -z-0" />
          {STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center z-10 flex-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs ${
                  i <= currentStepIndex ? "bg-accent" : "bg-slate-300"
                }`}
              >
                {i <= currentStepIndex ? "✓" : ""}
              </div>
              <span className="text-xs mt-2 text-center text-slate-600">{step}</span>
            </div>
          ))}
        </div>

        {/* Editable status control — lets you move this order through its
            lifecycle by hand while you don't have a warehouse system doing
            it automatically. Note: this is wide open, no login required —
            fine for development, but you'd want to lock this behind an
            admin login before this ever goes live for real customers. */}
        <div className="border-t pt-4">
          <p className="text-xs text-slate-500 mb-2">Update order status:</p>
          <div className="flex flex-wrap gap-2">
            {STEPS.map((step) => (
              <button
                key={step}
                disabled={updating || order.status === step}
                onClick={() => handleStatusChange(step)}
                className={`text-xs rounded px-3 py-1.5 border transition-colors disabled:cursor-not-allowed ${
                  order.status === step
                    ? "bg-accent text-white border-accent"
                    : "bg-white text-slate-600 border-slate-300 hover:border-accent hover:text-accent"
                }`}
              >
                {step}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border rounded p-6">
        <h3 className="font-semibold mb-4">Order Activity</h3>
        <ul className="space-y-4">
          {order.activity?.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span className="text-green-500">●</span>
              <div>
                <p className="text-slate-700">{a.message}</p>
                <p className="text-slate-400 text-xs">{new Date(a.date).toLocaleString()}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
