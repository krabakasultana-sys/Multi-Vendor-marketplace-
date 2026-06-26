export default function Newsletter() {
  return (
    <section className="newsletter">

      <div className="container">

        <h2>Subscribe to our Newsletter</h2>

        <p>
          Get the latest updates and offers.
        </p>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Your email address"
          />

          <button>
            Subscribe →
          </button>

        </div>

      </div>

    </section>
  );
}