import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="yoopin-footer">

      {/* Main Footer */}
      <div className="footer-main">

        <div className="container footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">⌁</span>
              YOOPIN
            </Link>

            <p>
              Premium fitness gear designed to help you
              train better, move stronger and live healthier.
            </p>

            <div className="footer-socials">
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="YouTube">▶</a>
            </div>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h3>QUICK LINKS</h3>

            <Link to="/products">Shop</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/tutorials">Tutorials</Link>
            <Link to="/about">About Us</Link>

          </div>


          {/* CUSTOMER SUPPORT */}
          <div className="footer-column">

            <h3>SUPPORT</h3>

            <Link to="/contact">Contact Us</Link>
            <Link to="/cart">My Cart</Link>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Returns & Refunds</a>

          </div>


          {/* CONTACT */}
          <div className="footer-contact">

            <h3>GET IN TOUCH</h3>

            <a href="mailto:hello@yoopin.com">
              hello@yoopin.com
            </a>

            <a href="tel:+919999999999">
              +91 99999 99999
            </a>

            <p>
              Indore, Madhya Pradesh
              <br />
              India
            </p>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div className="footer-bottom">

        <div className="container footer-bottom-inner">

          <p>
            © 2026 YOOPIN. All Rights Reserved.
          </p>

          <p>
            <span>TRAIN HARD.</span> LIVE STRONG.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;