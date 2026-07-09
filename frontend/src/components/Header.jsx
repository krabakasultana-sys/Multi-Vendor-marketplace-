const Header = () => (
  <div className="bg-white px-5 py-3 flex items-center gap-5 border-b border-gray-200">
    <a href="#" className="flex items-center gap-2 no-underline">
      <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
        <div className="w-3.5 h-3.5 border-2 border-white rounded-full"></div>
      </div>
      <span className="text-xl font-bold tracking-widest text-gray-900">CLICON</span>
    </a>
    <div className="flex flex-1 max-w-lg border border-gray-200 rounded overflow-hidden">
      <input type="text" placeholder="Search for anything..." className="flex-1 px-3 py-2 text-sm outline-none" />
      <button className="bg-orange-500 px-4 text-white border-none cursor-pointer">
        <i className="fas fa-search"></i>
      </button>
    </div>
    <div className="flex gap-4 items-center ml-auto">
      <button className="relative bg-transparent border-none cursor-pointer text-xl text-gray-600">
        <i className="fas fa-shopping-cart"></i>
        <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
      </button>
      <button className="bg-transparent border-none cursor-pointer text-xl text-gray-600"><i className="fas fa-heart"></i></button>
      <button className="bg-transparent border-none cursor-pointer text-xl text-gray-600"><i className="fas fa-user"></i></button>
    </div>
  </div>
);
export default Header;
