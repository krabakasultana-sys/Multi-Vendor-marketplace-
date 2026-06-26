import Countdown from "./Countdown";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function FlashSale() {
  return (
    <section className="flash-sale-section">

      <div className="container">

        <div className="flash-header">

          <div>

            <h2>Flash Sale Today</h2>

            <p>
              Hurry up! Limited-time offers.
            </p>

          </div>

          <Countdown />

        </div>

        <div className="products-grid">

          {products.slice(0,8).map((product)=>(

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </section>
  );
}