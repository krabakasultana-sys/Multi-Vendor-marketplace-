import { useState } from 'react';
import OrdersTable from '../components/OrdersTable';
import PaymentCards from '../components/PaymentCards';
import ProductCard from '../components/ProductCard';
import { recentOrders, browsingHistory } from '../data';

const Dashboard = ({ navigate, onAddCard }) => {
  return (
    <div>
      {/* Greeting */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Hello, Kevin</h2>
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
              <div className="font-semibold text-sm">Kevin Gilbert</div>
              <div className="text-gray-400 text-xs mb-1">Dhaka - 1207, Bangladesh</div>
              <div className="text-xs text-gray-500">Email: kevin.gilbert@gmail.com</div>
              <div className="text-xs text-gray-500">Sec Email: kevin12345@gmail.com</div>
              <div className="text-xs text-gray-500">Phone: +1-202-555-0118</div>
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
          <div className="font-semibold text-sm mb-2">Kevin Gilbert</div>
          <div className="text-xs text-gray-500 leading-relaxed">
            East Tejturi Bazar, Word No. 04, Road No. 13/x,<br/>
            House no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh<br/>
            Phone Number: +1-202-555-0118<br/>
            Email: kevin.gilbert@gmail.com
          </div>
          <button
            onClick={() => navigate('cards-address')}
            className="mt-3 border border-gray-200 text-orange-500 px-4 py-1.5 text-[11px] uppercase tracking-widest rounded bg-white cursor-pointer hover:bg-orange-50"
          >Edit Address</button>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-2">
          {[
            { icon: 'fa-rocket',       bg: 'bg-blue-50',   color: 'text-blue-600',  num: 154, label: 'Total Orders' },
            { icon: 'fa-box',          bg: 'bg-orange-50', color: 'text-orange-500',num: '05',label: 'Pending Orders' },
            { icon: 'fa-check-circle', bg: 'bg-green-50',  color: 'text-green-600', num: 149, label: 'Completed Orders' },
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
        <OrdersTable orders={recentOrders} onViewDetails={() => navigate('order-details')} />
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
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500">‹</button>
          {[1,2,3,4,5].map(n => (
            <button key={n} className={`w-8 h-8 rounded border text-xs cursor-pointer ${n===1 ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-500 border-gray-200 hover:border-orange-500 hover:text-orange-500'}`}>{n}</button>
          ))}
          <button className="w-8 h-8 rounded-full border border-gray-200 bg-white cursor-pointer text-gray-500 hover:border-orange-500 hover:text-orange-500">›</button>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
