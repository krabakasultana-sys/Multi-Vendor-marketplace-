import { useState } from "react";
import products from "../data/products";


import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      ...products[0],
      quantity: 1,
    },
    {
      ...products[3],
      quantity: 2,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <div className="container">

        <h1>Shopping Cart</h1>

        <div className="cart-layout">

          <div className="cart-items">

            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">

                  <h3>{item.name}</h3>

                  <p>${item.price}</p>

                </div>

                <div className="cart-qty">

                  <button
                    onClick={() =>
                      updateQuantity(item.id, -1)
                    }
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>

                </div>

                <h3>
                  $
                  {item.price * item.quantity}
                </h3>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeItem(item.id)
                  }
                >
                  ✕
                </button>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div>

              <span>Subtotal</span>

              <span>${subtotal}</span>

            </div>

            <div>

              <span>Shipping</span>

              <span>$20</span>

            </div>

            <div>

              <span>Tax</span>

              <span>$15</span>

            </div>

            <hr />

            <div>

              <strong>Total</strong>

              <strong>${subtotal + 35}</strong>

            </div>

            <Link
                 to="/checkout"
                 className="checkout-btn"
                >
                Proceed to Checkout
           </Link>

          </div>

        </div>

      </div>

    </div>
  );
}