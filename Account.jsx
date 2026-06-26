import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="account-page">

      <div className="container">

        <h1>My Account</h1>

        <div className="account-layout">

          <aside className="account-sidebar">

            <Link to="/account" className="active">Dashboard</Link>
            <Link to="/track-order">Track Order</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/cart">Shopping Cart</Link>
            <Link to="/">Logout</Link>

          </aside>

          <div className="account-content">

            <div className="dashboard-card">

              <h2>Welcome Back 👋</h2>

              <p>
                Manage your orders, wishlist, addresses and account information.
              </p>

            </div>

            <div className="dashboard-grid">

              <div className="dashboard-box">

                <h3>Total Orders</h3>

                <h1>12</h1>

              </div>

              <div className="dashboard-box">

                <h3>Wishlist</h3>

                <h1>8</h1>

              </div>

              <div className="dashboard-box">

                <h3>Pending Orders</h3>

                <h1>3</h1>

              </div>

              <div className="dashboard-box">

                <h3>Total Spent</h3>

                <h1>$5,420</h1>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}