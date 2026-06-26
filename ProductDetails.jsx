import { useParams } from "react-router-dom";
import products from "../data/products";
import { useState } from "react";

export default function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 style={{ padding: "50px" }}>Product Not Found</h2>;
  }

  return (
    <div className="product-page">

      <div className="container">

        <div className="breadcrumb">
          Home / Shop / {product.name}
        </div>

        <div className="product-details">

          {/* LEFT */}

          <div className="product-gallery">

            <img
              src={product.image}
              alt={product.name}
              className="main-image"
            />

            <div className="thumbnail-row">

              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />
              <img src={product.image} alt="" />

            </div>

          </div>

          {/* RIGHT */}

          <div className="product-info">

            <div className="rating">
              ★★★★★
            </div>

            <h1>{product.name}</h1>

            <h2 className="product-price">
              ${product.price}
            </h2>

            <p>

              <strong>Status:</strong> In Stock

            </p>

            <p>

              <strong>Category:</strong> {product.category}

            </p>

            <hr />

            <div className="colors">

              <h4>Choose Color</h4>

              <div className="color-list">

                <span className="black"></span>

                <span className="blue"></span>

                <span className="red"></span>

              </div>

            </div>

            <div className="storage">

              <h4>Storage</h4>

              <select>

                <option>128 GB</option>
                <option>256 GB</option>
                <option>512 GB</option>

              </select>

            </div>

            <div className="quantity-box">

              <button
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : 1)
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

            <div className="action-buttons">

              <button className="cart-btn">
                Add to Cart
              </button>

              <button className="wishlist-btn">
                Wishlist
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}