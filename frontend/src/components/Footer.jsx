const Footer = () => {
  const tags = ['Game','iPhone','TV','Asus Laptops','Macbook','SSD','Graphics Card','Power Bank','Smart TV','Speaker','Tablet','Microwave','Samsung'];
  return (
    <div className="bg-[#1a1a1a] text-gray-400 pt-10 pb-5 mt-10">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-5 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center">
              <div className="w-3.5 h-3.5 border-2 border-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-widest text-white">CLICON</span>
          </div>
          <p className="text-xs text-gray-500 mb-1">Customer Supports:</p>
          <div className="text-orange-500 text-base font-semibold">(629) 555-0129</div>
          <p className="text-xs mt-2 text-gray-500">4517 Washington Ave.<br/>Manchester, Kentucky 39495</p>
          <p className="text-xs mt-1 text-gray-500">info@kinbo.com</p>
        </div>

        {/* Top Category */}
        <div>
          <h5 className="text-white text-xs font-semibold mb-3 uppercase tracking-wide">Top Category</h5>
          {['Computer & Laptop','SmartPhone','Headphone','Accessories','Camera & Photo','TV & Homes'].map(c => (
            <a key={c} href="#" className={`block text-xs mb-2 no-underline hover:text-orange-500 ${c==='Accessories' ? 'text-orange-500' : 'text-gray-400'}`}>{c}</a>
          ))}
          <a href="#" className="text-orange-500 text-xs">Browse All Product →</a>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white text-xs font-semibold mb-3 uppercase tracking-wide">Quick Links</h5>
          {['Shop Product','Shoping Cart','Wishlist','Compare','Track Order','Customer Help','About Us'].map(l => (
            <a key={l} href="#" className="block text-xs mb-2 no-underline text-gray-400 hover:text-orange-500">{l}</a>
          ))}
        </div>

        {/* Download App */}
        <div>
          <h5 className="text-white text-xs font-semibold mb-3 uppercase tracking-wide">Download App</h5>
          {[{icon:'fa-google-play',label:'Google Play'},{icon:'fa-apple',label:'App Store'}].map(a => (
            <div key={a.label} className="flex items-center gap-2.5 bg-[#2a2a2a] rounded-md p-2 mb-2 cursor-pointer">
              <i className={`fab ${a.icon} text-2xl text-gray-400`}></i>
              <div>
                <div className="text-[9px] text-gray-400">Get it now</div>
                <div className="text-xs font-semibold text-white">{a.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Tags */}
        <div>
          <h5 className="text-white text-xs font-semibold mb-3 uppercase tracking-wide">Popular Tag</h5>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className={`border text-[11px] px-2 py-1 rounded cursor-pointer hover:border-orange-500 hover:text-orange-500 transition-colors
                ${t === 'Graphics Card' ? 'border-orange-500 text-orange-500' : 'border-gray-600 text-gray-400'}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center border-t border-gray-800 pt-4 text-xs text-gray-600 max-w-6xl mx-auto">
        Kinbo eCommerce Template © 2021. Design by Templatecookie
      </div>
    </div>
  );
};
export default Footer;
