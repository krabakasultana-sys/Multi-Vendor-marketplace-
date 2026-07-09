const TopBar = () => (
  <div className="bg-[#0d3880] text-gray-300 text-xs py-1.5 px-5 flex justify-between items-center">
    <span>Welcome to Clicon online eCommerce store.</span>
    <div className="flex items-center gap-3">
      <span>Follow us:</span>
      {['twitter','facebook','pinterest','discord','youtube','instagram'].map(s => (
        <a key={s} href="#" className="text-gray-300 hover:text-white">
          <i className={`fab fa-${s}`}></i>
        </a>
      ))}
      <span className="ml-3">Eng ▾</span>
      <span>USD ▾</span>
    </div>
  </div>
);
export default TopBar;
