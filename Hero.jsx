import macbook from "../assets/images/macbook.png";

export default function Hero() {
  return (
    <section className="hero-section">

      <div className="container hero-wrapper">

        <div className="hero-left">

          <span className="offer-tag">
            THE BEST PLACE TO PLAY
          </span>

          <h1>
            Xbox Consoles
          </h1>

          <p>
            Save up to 50% on select gaming devices and accessories.
          </p>

          <button className="shop-btn">
            SHOP NOW →
          </button>

        </div>

        <div className="hero-right">

          <img
            src={macbook}
            alt="Hero Product"
          />

        </div>

      </div>

    </section>
  );
}