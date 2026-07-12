import { useEffect, useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import PaymentCards from '../components/PaymentCards';
import ProductCard from '../components/DashboardProductCard';
import { browsingHistory } from '../data';
import { getMyOrders } from '../../api';

// Turns a real MongoDB order document into the { id, status, date, total,
// products } shape that <OrdersTable> already knows how to render.
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

const Dashboard = ({ navigate, onAddCard }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    const parsedUser = stored ? JSON.parse(stored) : null;
    setUser(parsedUser);

    if (parsedUser?.email) {
      getMyOrders(parsedUser.email)
        .then(setOrders)
        .catch(() => setOrders([]))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  const totalOrders = orders.length;
  const completedOrders = orders.filter((o) => o.status === 'Delivered').length;
  const pendingOrders = totalOrders - completedOrders;
  const recentOrders = orders.slice(0, 7).map(toTableRow);

  // Use the billing details from the most recent order as the "on file"
  // address, since the User account itself doesn't store one.
  const latestBilling = orders[0]?.billing;

  return (
    <div>
      {/* Greeting */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Hello, {user?.name?.split(' ')[0] || 'there'}</h2>
        <p className="text-gray-500 text-xs mt-1">
          From your account dashboard, you can easily check & view your{' '}
          <button onClick={() => navigate('order-history')} className="text-orange-500 bg-transparent border-none cursor-pointer text-xs p-0">Recent Orders</button>,
          manage your{' '}
          <button onClick={() => navigate('cards-address')} className="text-orange-500 bg-transparent border-none cursor-pointer text-xs p-0">Shipping and Billing Addresses</button> and
          edit your Password and{' '}
          <button onClick={() => navigate('settings')} className="text-orange-500 bg-transparent border-none cursor-pointer text-xs p-0">Account Details</button>.
        </p>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Account Info */}
        <div className="bg-white rounded-md p-5">
          <h4 className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-3">Account Info</h4>
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-full bg-[#0d3880] flex items-center justify-center text-white text-lg flex-shrink-0">
              <i className="fas fa-user"></i>
            </div>
            <div>
              <div className="font-semibold text-sm">{user?.name || 'Guest'}</div>
              <div className="text-xs text-gray-500">Email: {user?.email || 'Not signed in'}</div>
              <button
                onClick={() => navigate('settings')}
                className="mt-3 border border-gray-200 text-orange-500 px-4 py-1.5 text-[11px] uppercase tracking-widest rounded bg-white cursor-pointer hover:bg-orange-50"
              >Edit Account</button>
            </div>
          </div>
        </div>

        {/* Billing Address */}
        <div className="bg-white rounded-md p-5">
          <h4 className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold mb-3">Billing Address</h4>
          {latestBilling ? (
            <>
              <div className="font-semibold text-sm mb-2">{latestBilling.firstName} {latestBilling.lastName}</div>
              <div className="text-xs text-gray-500 leading-relaxed">
                {latestBilling.address}<br/>
                {latestBilling.city}{latestBilling.city && latestBilling.region ? ', ' : ''}{latestBilling.region} {latestBilling.zipCode}<br/>
                Phone Number: {latestBilling.phone}<br/>
                Email: {latestBilling.email}
              </div>
            </>
          ) : (
            <div className="text-xs text-gray-400">No address on file yet — it's saved automatically the first time you check out.</div>
          )}
          <button
            onClick={() => navigate('cards-address')}
            className="mt-3 border border-gray-200 text-orange-500 px-4 py-1.5 text-[11px] uppercase tracking-widest rounded bg-white cursor-pointer hover:bg-orange-50"
          >Edit Address</button>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-2">
          {[
            { icon: 'fa-rocket',       bg: 'bg-blue-50',   color: 'text-blue-600',  num: totalOrders,     label: 'Total Orders' },
            { icon: 'fa-box',          bg: 'bg-orange-50', color: 'text-orange-500',num: pendingOrders,   label: 'Pending Orders' },
            { icon: 'fa-check-circle', bg: 'bg-green-50',  color: 'text-green-600', num: completedOrders, label: 'Completed Orders' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-md p-3.5 flex items-center gap-3.5">
              <div className={`w-10 h-10 rounded-md ${s.bg} ${s.color} flex items-center justify-center text-lg flex-shrink-0`}>
                <i className={`fas ${s.icon}`}></i>
              </div>
              <div>
                <div className="text-xl font-bold leading-none">{s.num}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Cards */}
      <PaymentCards onAddCard={onAddCard} />

      {/* Recent Orders */}
      <div className="bg-white rounded-md p-5 mb-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide">Recent Order</span>
          <button onClick={() => navigate('order-history')} className="text-orange-500 text-xs bg-transparent border-none cursor-pointer">View All →</button>
        </div>
        {loading ? (
          <div className="text-xs text-gray-400 py-4">Loading your orders…</div>
        ) : recentOrders.length === 0 ? (
          <div className="text-xs text-gray-400 py-4">
            No orders yet — <a href="/shop" className="text-orange-500">start shopping</a> and your orders will show up here.
          </div>
        ) : (
          <OrdersTable orders={recentOrders} onViewDetails={() => navigate('order-details')} />
        )}
      </div>

      {/* Browsing History */}
      <div className="bg-white rounded-md p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold uppercase tracking-wide">Browsing History</span>
          <button onClick={() => navigate('browsing-history')} className="text-orange-500 text-xs bg-transparent border-none cursor-pointer">View All →</button>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {browsingHistory[0].products.map((p, i) => <ProductCard key={i} product={p} />)}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
