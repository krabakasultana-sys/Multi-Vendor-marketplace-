import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaRedditAlien, FaYoutube, FaInstagram,
  FaMapMarkerAlt, FaExchangeAlt, FaHeadset, FaInfoCircle, FaSearch, FaShoppingCart,
  FaRegHeart, FaUser, FaAngleDown, FaPhoneAlt,
} from "react-icons/fa";
import { useCart } from "../CartContext";
import { useCompare } from "../CompareContext";
import { FALLBACK_CATEGORIES, CATEGORY_ICONS, ALL_CATEGORIES_ICON, DEFAULT_CATEGORY_ICON } from "../categoryIcons";

export default function Header() {
  const { cartCount, wishlistItems } = useCart();
  const { compareIds } = useCompare();
  const [search, setSearch] = useState("");
  const [categoryOpen, setCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  function onSearch(e) {
    e.preventDefault();
    navigate(`/?search=${encodeURIComponent(search)}`);
  }

  // Close the category dropdown if you click anywhere outside it.
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function goToCategory(cat) {
    setCategoryOpen(false);
    navigate(cat === "All" ? "/" : `/?category=${encodeURIComponent(cat)}`);
  }

  return (
    <header className="w-full">
      {/* Top bar: light blue, "Welcome" message + social links + language/currency */}
      <div className="bg-primary-light text-white text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <span>Welcome to Clicon online eCommerce store.</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-3">
              <span className="text-white/90">Follow us:</span>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><FaTwitter /></a>
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><FaFacebookF /></a>
              <a href="#" aria-label="Pinterest" className="hover:text-accent transition-colors"><FaPinterestP /></a>
              <a href="#" aria-label="Reddit" className="hover:text-accent transition-colors"><FaRedditAlien /></a>
              <a href="#" aria-label="Youtube" className="hover:text-accent transition-colors"><FaYoutube /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><FaInstagram /></a>
            </span>
            <span className="w-px h-4 bg-white/30" />
            <span className="cursor-pointer">Eng ▾</span>
            <span className="cursor-pointer">USD ▾</span>
          </div>
        </div>
      </div>

      {/* Main row: logo, search, cart/wishlist/account — light blue, per latest request */}
      <div className="bg-primary-light border-b border-primary">
        <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-[auto_1fr_auto] items-center gap-6">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="bg-white text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">
              C
            </span>
            <span className="text-xl font-bold text-white">CLICON</span>
          </Link>

          <form onSubmit={onSearch} className="w-full max-w-2xl mx-auto">
            <div className="flex bg-white border-2 border-white rounded overflow-hidden">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for anything..."
                className="flex-1 px-4 py-2 outline-none text-sm"
              />
              <button className="bg-white text-slate-500 px-5 hover:text-primary">
                <FaSearch />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-5 text-white shrink-0 justify-self-end">
            <Link to="/cart" className="relative">
              <FaShoppingCart size={18} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/wishlist" className="relative">
              <FaRegHeart size={18} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <FaUser size={18} />
          </div>
        </div>
      </div>

      {/* Bottom nav row: white, with a small icon on every option */}
      <div className="bg-white border-b">
        <nav className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-center sm:justify-between gap-x-6 gap-y-2 text-sm text-slate-600">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCategoryOpen((o) => !o)}
                className="hover:text-primary flex items-center gap-1.5"
              >
                All Category <FaAngleDown size={11} className={categoryOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>
              {categoryOpen && (
                <div className="absolute left-0 top-full mt-2 w-64 bg-white border rounded shadow-lg z-50 py-2">
                  {[{ label: "Electronics Devices", value: "All", Icon: ALL_CATEGORIES_ICON }, ...FALLBACK_CATEGORIES.map((cat) => ({
                    label: cat,
                    value: cat,
                    Icon: CATEGORY_ICONS[cat] || DEFAULT_CATEGORY_ICON,
                  }))].map(({ label, value, Icon }, i) => (
                    <button
                      key={label}
                      onClick={() => goToCategory(value)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm text-left hover:bg-slate-50 hover:text-primary ${
                        i === 0 ? "font-semibold text-slate-800" : "text-slate-600"
                      }`}
                    >
                      <Icon size={14} className="text-slate-400" />
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link to="/track-order" className="hover:text-primary flex items-center gap-1.5">
              <FaMapMarkerAlt size={13} /> Track Order
            </Link>
            <Link to="/compare" className="hover:text-primary relative flex items-center gap-1.5">
              <FaExchangeAlt size={13} /> Compare
              {compareIds.length > 0 && (
                <span className="ml-0.5 bg-primary text-white text-[10px] rounded-full px-1.5 py-0.5">
                  {compareIds.length}
                </span>
              )}
            </Link>
            <span className="hover:text-primary cursor-pointer flex items-center gap-1.5">
              <FaHeadset size={13} /> Customer Support
            </span>
            <span className="hover:text-primary cursor-pointer flex items-center gap-1.5">
              <FaInfoCircle size={13} /> Need Help
            </span>
          </div>
          <span className="text-primary font-medium whitespace-nowrap flex items-center gap-1.5">
            <FaPhoneAlt size={12} /> +1-202-555-0104
          </span>
        </nav>
      </div>
    </header>
  );
}
