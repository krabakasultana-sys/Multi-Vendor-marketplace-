const steps = [
  { label: 'Order Placed', icon: '📋', done: true },
  { label: 'Packaging',    icon: '📦', done: true },
  { label: 'On The Road',  icon: '🚚', done: false },
  { label: 'Delivered',    icon: '🎁', done: false },
];

const activity = [
  { text: 'Your order has been delivered. Thank you for shopping at Clicon!', time: '23 Jan, 2021 at 7:32 PM',  icon: '✓',  color: 'text-green-500' },
  { text: 'Our delivery man (John Wick) Has picked-up your order for delivery.', time: '23 Jan, 2021 at 2:00 PM', icon: '👤', color: 'text-gray-400' },
  { text: 'Your order has reached at last mile hub.',   time: '22 Jan, 2021 at 8:00 AM', icon: '📍', color: 'text-gray-400' },
  { text: 'Your order on the way to (last mile) hub.', time: '21, 2021 at 5:32 AM',      icon: '🏭', color: 'text-gray-400' },
  { text: 'Your order is successfully verified.',       time: '20 Jan, 2021 at 7:32 PM', icon: '✓',  color: 'text-green-500' },
  { text: 'Your order has been confirmed.',             time: '19 Jan, 2021 at 2:61 PM', icon: '📋', color: 'text-gray-400' },
];

const products = [
  { category: 'SMARTPHONE',  name: 'Google Pixel 6 Pro- 5G Android Phone-Unlocked Smartphone with Advanced Pixel C...', price: '$899', qty: 'x1', sub: '$899',  emoji: '📱' },
  { category: 'ACCESSORIES', name: 'Tech21 Evo Clear for Google Pixel 6 Pro - Crystal Clear Phone Case with 12ft Multi-Dr...', price: '$39', qty: 'x1', sub: '$39', emoji: '📱' },
];

const OrderDetails = ({ navigate, onLeaveRating }) => (
  <div>
    {/* Header bar */}
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => navigate('order-history')} className="flex items-center gap-1.5 text-gray-500 text-xs bg-transparent border-none cursor-pointer hover:text-orange-500">
        ← ORDER DETAILS
      </button>
      <button onClick={onLeaveRating} className="text-orange-500 text-xs flex items-center gap-1 bg-transparent border-none cursor-pointer">
        Leave a Rating +
      </button>
    </div>

    {/* Order summary */}
    <div className="bg-white rounded-md p-5 mb-4">
      <div className="bg-orange-50 border border-orange-100 rounded-md p-4 flex justify-between items-center mb-4">
        <div>
          <div className="text-base font-bold">#96459761</div>
          <div className="text-xs text-gray-400 mt-1">4 Products · Order Placed in 17 Jan, 2021 at 7:32 PM</div>
        </div>
        <div className="text-xl font-bold text-orange-500">$1199.00</div>
      </div>

      <div className="text-xs text-gray-400 mb-4">Order expected arrival <strong className="text-gray-700">23 Jan, 2021</strong></div>

      {/* Steps */}
      <div className="flex items-start relative mb-6">
        {steps.map((s, i) => (
          <div key={i} className="flex-1 text-center relative">
            {i < steps.length - 1 && (
              <div className={`absolute top-3.5 left-1/2 w-full h-0.5 ${s.done ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
            )}
            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center mx-auto mb-2 text-xs relative z-10 ${s.done ? 'bg-orange-500 border-orange-500 text-white' : 'bg-white border-gray-200'}`}>
              {s.done ? '✓' : ''}
            </div>
            <div className={`text-2xl mb-1 ${s.done ? 'text-orange-500' : 'text-gray-300'}`}>{s.icon}</div>
            <div className="text-[11px] text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Activity */}
      <div className="font-semibold text-xs mb-3">Order Activity</div>
      <div>
        {activity.map((a, i) => (
          <div key={i} className="flex gap-3.5 py-3 border-b border-gray-50 last:border-0">
            <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-xs flex-shrink-0 ${a.color}`}>{a.icon}</div>
            <div>
              <div className="text-xs">{a.text}</div>
              <div className="text-[11px] text-gray-400 mt-0.5">{a.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Products */}
    <div className="bg-white rounded-md p-5 mb-4">
      <div className="font-semibold text-sm mb-3">Product (02)</div>
      <table className="w-full border-collapse text-xs">
        <thead>
          <tr className="bg-gray-50">
            {['PRODUCTS','PRICE','QUANTITY','SUB-TOTAL'].map(h => (
              <th key={h} className="text-left px-3 py-2.5 text-[11px] uppercase tracking-wide text-gray-400 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0">
              <td className="px-3 py-3">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-xl flex-shrink-0">{p.emoji}</div>
                  <div>
                    <div className="text-[10px] font-semibold text-orange-500 uppercase tracking-wide">{p.category}</div>
                    <div className="text-xs">{p.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-3 py-3">{p.price}</td>
              <td className="px-3 py-3">{p.qty}</td>
              <td className="px-3 py-3">{p.sub}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Addresses */}
    <div className="grid grid-cols-3 gap-4">
      {[
        { title: 'Billing Address',  lines: ['Kevin Gilbert','East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka-1200, Bangladesh','Phone Number: +1-202-555-0118','Email: kevin.gilbert@gmail.com'] },
        { title: 'Shipping Address', lines: ['Kevin Gilbert','East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka-1200, Bangladesh','Phone Number: +1-202-555-0118','Email: kevin.gilbert@gmail.com'] },
        { title: 'Order Notes',      lines: ['Donec ac vehicula turpis. Aenean sagittis est eu arco ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.'] },
      ].map((s, i) => (
        <div key={i} className="bg-white rounded-md p-5">
          <div className="font-semibold text-sm mb-3">{s.title}</div>
          {s.lines.map((line, j) => <div key={j} className="text-xs text-gray-500 mb-1 leading-relaxed">{line}</div>)}
        </div>
      ))}
    </div>
  </div>
);
export default OrderDetails;
