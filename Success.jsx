import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="success-page">

      <div className="container success-box">

        <div className="success-icon">
          ✔
        </div>

        <h1>Thank You!</h1>

        <p>

          Your order has been placed successfully.

        </p>

        <h3>

          Order No: #CL123456

        </h3>

        <Link
          to="/shop"
          className="continue-btn"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}