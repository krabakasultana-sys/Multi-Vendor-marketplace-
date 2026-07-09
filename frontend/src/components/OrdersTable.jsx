import StatusBadge from './StatusBadge';

const OrdersTable = ({ orders, onViewDetails }) => (
  <table className="w-full border-collapse text-xs">
    <thead>
      <tr>
        {['ORDER ID','STATUS','DATE','TOTAL','ACTION'].map(h => (
          <th key={h} className="text-left px-3 py-2.5 text-[11px] uppercase tracking-wide text-gray-400 font-semibold border-b border-gray-100">{h}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {orders.map((o, i) => (
        <tr key={i} className="border-b border-gray-50 last:border-0">
          <td className="px-3 py-3 font-medium">{o.id}</td>
          <td className="px-3 py-3"><StatusBadge status={o.status} /></td>
          <td className="px-3 py-3 text-gray-400">{o.date}</td>
          <td className="px-3 py-3">{o.total} ({o.products} Products)</td>
          <td className="px-3 py-3">
            <button
              onClick={() => onViewDetails && onViewDetails(o)}
              className="text-orange-500 text-xs flex items-center gap-1 bg-transparent border-none cursor-pointer"
            >
              View Details →
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default OrdersTable;
