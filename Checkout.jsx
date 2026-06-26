import { useNavigate } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

export default function Checkout() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
    payment: "card",
  });

  const subtotal = products[0].price + products[3].price;
  const shipping = 20;
  const tax = 15;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    navigate("/success");
  };

  return (
    <div className="checkout-page">

      <div className="container">

        <h1>Checkout</h1>

        <div className="checkout-layout">

          {/* Billing */}

          <form
            className="billing-form"
            onSubmit={placeOrder}
          >

            <h2>Billing Details</h2>

            <div className="row">

              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <textarea
              placeholder="Address"
              rows="4"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            ></textarea>

            <div className="row">

              <input
                type="text"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="ZIP Code"
                name="zip"
                value={form.zip}
                onChange={handleChange}
              />

            </div>

            <select
              name="country"
              value={form.country}
              onChange={handleChange}
            >
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>

            <h3>Payment Method</h3>

            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={form.payment === "card"}
                onChange={handleChange}
              />
              Credit Card
            </label>

            <label>
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={form.payment === "paypal"}
                onChange={handleChange}
              />
              PayPal
            </label>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>

          </form>

          {/* Summary */}

          <div className="checkout-summary">

            <h2>Order Summary</h2>

            <div>
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div>
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>

            <div>
              <span>Tax</span>
              <span>${tax}</span>
            </div>

            <hr />

            <div>
              <strong>Total</strong>
              <strong>${total}</strong>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}