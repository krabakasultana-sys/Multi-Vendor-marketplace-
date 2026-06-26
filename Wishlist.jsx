import { useState } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";

export default function Wishlist() {

  const [wishlist, setWishlist] = useState([
    products[1],
    products[4],
    products[7],
    products[10],
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (

    <div className="wishlist-page">

      <div className="container">

        <h1>My Wishlist</h1>

        <table className="wishlist-table">

          <thead>

            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th></th>
            </tr>

          </thead>

          <tbody>

            {wishlist.map(product => (

              <tr key={product.id}>

                <td className="wishlist-product">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span>{product.name}</span>

                </td>

                <td>${product.price}</td>

                <td>

                  <span className="stock">
                    IN STOCK
                  </span>

                </td>

                <td>

                  <Link
                    to="/cart"
                    className="move-cart"
                  >
                    Add To Cart
                  </Link>

                  <button
                    className="remove"
                    onClick={() => removeItem(product.id)}
                  >
                    ✕
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}