import { Link, useLocation, Navigate } from "react-router-dom";

export default function OrderSuccess() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) return <Navigate to="/" replace />;

  return (
    <div className="max-w-xl mx-auto px-4 py-16 text-center">
      <div className="text-5xl mb-4">✅</div>
      <h1 className="text-xl font-semibold mb-2">Your order is successfully placed!</h1>
      <p className="text-slate-500 mb-1">
        Order ID: <span className="font-medium text-slate-700">{order.orderNumber}</span>
      </p>
      <p className="text-slate-500 mb-6">Total: ${order.total?.toFixed(2)}</p>
      <div className="flex gap-3 justify-center">
        <Link
          to={`/order/${order._id}`}
          className="bg-primary text-white rounded px-5 py-2 text-sm"
        >
          Track Order →
        </Link>
        <Link to="/" className="border rounded px-5 py-2 text-sm">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
