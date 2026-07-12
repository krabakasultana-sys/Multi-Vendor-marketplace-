import ProductCard from '../components/DashboardProductCard';
import { browsingHistory } from '../data';

const BrowsingHistory = () => (
  <div>
    <div className="flex justify-between items-center mb-4">
      <div className="font-semibold text-sm">Browsing History</div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        Turn browsing history data
        <div className="w-10 h-6 bg-orange-500 rounded-full relative cursor-pointer">
          <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex gap-3 mb-4">
      <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded px-3 py-2 bg-white">
        <i className="fas fa-search text-gray-300 text-xs"></i>
        <input type="text" placeholder="Search in browsing history" className="border-none outline-none flex-1 text-xs" />
      </div>
      <div className="flex items-center gap-2 border border-gray-200 rounded px-3 py-2 bg-white text-xs text-orange-500">
        <i className="far fa-calendar"></i> DD/MM/YYYY
      </div>
    </div>

    {browsingHistory.map((group, gi) => (
      <div key={gi} className="bg-white rounded-md mb-4 overflow-hidden">
        <div className="bg-gray-50 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400">{group.date}</div>
        <div className="p-4 grid grid-cols-4 gap-3">
          {group.products.map((p, pi) => <ProductCard key={pi} product={p} />)}
        </div>
      </div>
    ))}

    <div className="text-center mt-4">
      <button className="flex items-center gap-2 border-2 border-orange-500 text-orange-500 px-8 py-3 rounded text-xs font-semibold bg-transparent cursor-pointer mx-auto hover:bg-orange-50">
        <i className="fas fa-redo text-[11px]"></i> LOAD MORE
      </button>
    </div>
  </div>
);
export default BrowsingHistory;
