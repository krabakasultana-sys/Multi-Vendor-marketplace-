import macbook from "../assets/images/macbook.png";
import samsung from "../assets/images/Samsung Galaxy.png";

export default function BestDeals() {
  return (
    <section className="best-deals">

      <div className="container deals-grid">

        <div className="deal-card blue">

          <div>

            <span>COMPUTER & LAPTOP</span>

            <h2>MacBook Pro</h2>

            <p>
              Powerful performance with the M-series chip.
            </p>

            <button>
              SHOP NOW →
            </button>

          </div>

          <img
            src={macbook}
            alt="MacBook"
          />

        </div>

        <div className="deal-card orange">

          <div>

            <span>SMARTPHONE</span>

            <h2>Samsung Galaxy</h2>

            <p>
              Capture every moment beautifully.
            </p>

            <button>
              SHOP NOW →
            </button>

          </div>

          <img
            src={samsung}
            alt="Samsung"
          />

        </div>

      </div>

    </section>
  );
}