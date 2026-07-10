import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center font-bold">
              C
            </span>
            <span className="text-lg font-bold text-white">CLICON</span>
          </div>
          <p className="text-slate-400">
            Customer Support: <br /> (629) 555-0129
          </p>
          <p className="text-slate-400 mt-2">
            457 Wregway Ave. <br /> Manchester, Kentucky 39495
          </p>
          <p className="text-slate-400 mt-2">info@clicon.com</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Top Category</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Computer &amp; Laptop</li>
            <li>SmartPhone</li>
            <li>Headphone</li>
            <li>Accessories</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Popular Tag</h4>
          <div className="flex flex-wrap gap-2">
            {["Game", "iPhone", "TV", "Asus Laptop", "Macbook", "SSD", "Graphics Card", "Power Bank", "Smart TV", "Speaker", "Tablet", "Microwave", "Samsung"].map(
              (tag) => (
                <span key={tag} className="border border-slate-700 rounded px-2 py-1 text-xs">
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-4 border-t border-slate-800">
        © Clicon eCommerce. All rights reserved. · <Link to="/admin" className="hover:text-white">Admin</Link>
      </div>
    </footer>
  );
}
