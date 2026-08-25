import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-bg.png";

function Hero() {
  return (
    <section className="fitness-hero">

      {/* Background image */}
      <img
        src={heroImage}
        alt="Fitness equipment"
        className="fitness-hero-image"
      />

      {/* Light overlay */}
      <div className="fitness-hero-overlay"></div>

      {/* Hero content */}
      <div className="fitness-hero-content">

        <h1>
          TRAIN HARD.
          <br />
          LIVE STRONG.
        </h1>

        <p>
          Premium fitness gear designed for durability and
          <br />
          peak performance.
        </p>

        <div className="hero-buttons">

          <Link to="/shop" className="hero-btn primary-btn">
            SHOP NOW
          </Link>

          <Link to="/categories" className="hero-btn secondary-btn">
            EXPLORE COLLECTION
          </Link>

        </div>

      </div>

      {/* Left arrow */}
      <button className="fitness-hero-arrow left-arrow">
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Right arrow */}
      <button className="fitness-hero-arrow right-arrow">
        <i className="bi bi-chevron-right"></i>
      </button>

    </section>
  );
}

export default Hero;