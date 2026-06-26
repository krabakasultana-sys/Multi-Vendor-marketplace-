import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image-box">

    <span className="sale-badge">
        SALE
    </span>

    <img
        src={product.image}
        alt={product.name}
        className="product-image"
    />

</div>

      <div className="product-info">

        <div className="stars">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
        </div>

        <h3>{product.name}</h3>

        <p className="price">
          ${product.price}
        </p>

        <Link
          className="details-btn"
          to={`/product/${product.id}`}
        >
          View Details →
        </Link>

      </div>

    </div>
  );
}