const menuItems = [
  { label: 'Dashboard',        icon: 'fa-th-large',       page: 'dashboard' },
  { label: 'Order History',    icon: 'fa-receipt',        page: 'order-history' },
  { label: 'Track Order',      icon: 'fa-map-marker-alt', page: 'track-order' },
  { label: 'Shopping Cart',    icon: 'fa-shopping-cart',  page: 'shopping-cart' },
  { label: 'Wishlist',         icon: 'fa-heart',          page: 'wishlist' },
  { label: 'Compare',          icon: 'fa-sync-alt',       page: 'compare' },
  { label: 'Cards & Address',  icon: 'fa-credit-card',    page: 'cards-address' },
  { label: 'Browsing History', icon: 'fa-history',        page: 'browsing-history' },
  { label: 'Setting',          icon: 'fa-cog',            page: 'settings' },
  { label: 'Log-out',          icon: 'fa-sign-out-alt',   page: null },
];

const Sidebar = ({ active, navigate }) => (
  <div className="w-52 flex-shrink-0">
    <div className="bg-white rounded-md overflow-hidden">
      {menuItems.map(item => (
        <button
          key={item.label}
          onClick={() => {
            if (item.label === 'Log-out') {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              window.location.href = '/admin-login';
              return;
            }
            item.page && navigate(item.page);
          }}
          className={`flex items-center gap-2.5 px-4 py-3 text-xs w-full border-none cursor-pointer transition-all
            ${active === item.page
              ? 'bg-orange-500 text-white'
              : 'bg-white text-gray-500 hover:text-orange-500'}`}
        >
          <i className={`fas ${item.icon} w-4 text-center`}></i>
          {item.label}
        </button>
      ))}
    </div>
  </div>
);
export default Sidebar;
