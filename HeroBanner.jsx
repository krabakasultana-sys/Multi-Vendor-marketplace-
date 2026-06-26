import macbook from "../assets/images/macbook.png";

export default function HeroBanner() {
  return (
    <section className="hero-banner">

      <div className="container hero-container">

        <div className="hero-text">

          <span className="hero-small">
            THE BEST PLACE TO PLAY
          </span>

          <h1>
            Xbox Consoles
          </h1>

          <p>
            Save up to 50% on selected gaming products.
            Enjoy the latest technology at unbeatable prices.
          </p>

          <button className="orange-btn">
            SHOP NOW →
          </button>

        </div>

        <div className="hero-image">

          <img
            src={macbook}
            alt="MacBook"
          />

          <div className="price-circle">
            $299
          </div>

        </div>

      </div>

    </section>
  );
}