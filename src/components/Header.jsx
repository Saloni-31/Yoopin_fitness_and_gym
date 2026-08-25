import { NavLink } from "react-router-dom";
import mountain from "../assets/icons/mountain.svg";

function Header() {
  return (
    <header className="main-header">

      {/* Logo */}
        <div className="logo">
		  <img src={mountain} alt="Yoopin logo" />
		  <div className="logo-text">YOOPIN</div>
		</div>

      {/* Navigation */}
      <nav className="main-nav">
        <NavLink to="/">SHOP</NavLink>
        <NavLink to="/categories">CATEGORIES</NavLink>
        <NavLink to="/tutorials">TUTORIALS</NavLink>
        <NavLink to="/about">ABOUT US</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
      </nav>

      {/* Right icons */}
      <div className="header-icons">

        <button aria-label="Search">
          <i className="bi bi-search"></i>
        </button>

        <button aria-label="Wishlist">
          <i className="bi bi-heart"></i>
        </button>

        <button className="cart-icon" aria-label="Cart">
          <i className="bi bi-cart3"></i>
          <span>3</span>
        </button>

        <button aria-label="Account">
          <i className="bi bi-person"></i>
        </button>

      </div>

    </header>
  );
}

export default Header;