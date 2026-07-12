import { useEffect, useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import { getMyOrders } from '../../api';

function toTableRow(order) {
  return {
    id: order.orderNumber,
    status:
      order.status === 'Delivered' ? 'COMPLETED' :
      order.status === 'Order Placed' ? 'IN PROGRESS' :
      order.status.toUpperCase(),
    date: new Date(order.createdAt).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
    }),
    total: `$${(order.total || 0).toFixed(2)}`,
    products: (order.items || []).reduce((sum, it) => sum + (it.quantity || 1), 0),
  };
}

const PAGE_SIZE = 10;

const OrderHistory = ({ navigate }) => {
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    const user = stored ? JSON.parse(stored) : null;
    if (user?.email) {
      getMyOrders(user.email)
        .then(setOrders)
        .catch(() => setOrders([]))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const totalPages = Math.max(1, Math.ceil(orders.length / PAGE_SIZE));
  const visibleOrders = orders.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map(toTableRow);

  return (
    <div className="bg-white rounded-md p-5">
      <div className="text-xs font-semibold uppercase tracking-wide mb-4">Order History</div>
      {loading ? (
        <div className="text-xs text-gray-400 py-4">Loading your orders…</div>
      ) : orders.length === 0 ? (
        <div className="text-xs text-gray-400 py-4">
          No orders yet — <a href="/shop" className="text-orange-500">start shopping</a> and your orders will show up here.
        </div>
      ) : (
        <>
          <OrdersTable orders={visibleOrders} onViewDetails={() => navigate('order-details')} />
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500"
              >‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-8 h-8 rounded-full border text-xs cursor-pointer ${n===page ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-500 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}
                >{n < 10 ? `0${n}` : n}</button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500"
              >›</button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
export default OrderHistory;
