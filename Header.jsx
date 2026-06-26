import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUser,
  FaBalanceScale,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-content">

          <span>
            Welcome to Clicon online eCommerce store.
          </span>

          <div className="topbar-right">

            <span>
              <FaPhoneAlt /> +1 (202) 555-0104
            </span>

            <span>English</span>

            <span>USD</span>

          </div>

        </div>
      </div>

      {/* Main Header */}

      <header className="main-header">

        <div className="container header-row">

          <Link to="/" className="logo">
            CLICON
          </Link>

          <div className="search">

            <input
              type="text"
              placeholder="Search for anything..."
            />

            <button>
              <FaSearch />
            </button>

          </div>

          <div className="icons">

            <Link to="/compare">
              <FaBalanceScale />
            </Link>

            <Link to="/wishlist">
              <FaHeart />
            </Link>

            <Link to="/cart">
              <FaShoppingCart />
            </Link>

            <Link to="/account">
              <FaUser />
            </Link>

          </div>

        </div>

      </header>

      {/* Navigation */}

      <nav className="nav">

           <Link to="/home">Home</Link>

           <Link to="/shop">Shop</Link>

           <Link to="/compare">Compare</Link>

           <Link to="/wishlist">Wishlist</Link>

           <Link to="/cart">Cart</Link>

          <Link to="/track-order">Track Order</Link>

          <Link to="/account">Account</Link>

      </nav>
    </>
  );
}