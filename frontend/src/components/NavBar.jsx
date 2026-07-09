const NavBar = () => (
  <div className="bg-white border-b border-gray-200 px-5 flex items-center justify-between">
    <div className="flex items-center gap-1">
      <button className="bg-gray-900 text-white border-none px-4 py-3 cursor-pointer text-sm flex items-center gap-1.5">
        ☰ All Category ▾
      </button>
      {[
        { icon: 'fa-map-marker-alt', label: 'Track Order' },
        { icon: 'fa-sync-alt',       label: 'Compare' },
        { icon: 'fa-headset',        label: 'Customer Support' },
        { icon: 'fa-question-circle',label: 'Need Help' },
      ].map(item => (
        <a key={item.label} href="#" className="text-gray-500 no-underline px-4 py-3.5 flex items-center gap-1.5 text-xs hover:text-orange-500 transition-colors">
          <i className={`fas ${item.icon}`}></i> {item.label}
        </a>
      ))}
    </div>
    <div className="text-gray-500 text-xs flex items-center gap-1.5">
      <i className="fas fa-phone"></i> +1-202-555-0104
    </div>
  </div>
);
export default NavBar;
