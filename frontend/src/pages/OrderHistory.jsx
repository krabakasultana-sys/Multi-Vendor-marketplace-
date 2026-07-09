import { useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import { allOrders } from '../data';

const OrderHistory = ({ navigate }) => {
  const [page, setPage] = useState(1);
  return (
    <div className="bg-white rounded-md p-5">
      <div className="text-xs font-semibold uppercase tracking-wide mb-4">Order History</div>
      <OrdersTable orders={allOrders} onViewDetails={() => navigate('order-details')} />
      <div className="flex items-center justify-center gap-1.5 mt-4">
        <button className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500">‹</button>
        {[1,2,3,4,5,6].map(n => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={`w-8 h-8 rounded-full border text-xs cursor-pointer ${n===page ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-500 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}
          >{n < 10 ? `0${n}` : n}</button>
        ))}
        <button className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500">›</button>
      </div>
    </div>
  );
};
export default OrderHistory;
