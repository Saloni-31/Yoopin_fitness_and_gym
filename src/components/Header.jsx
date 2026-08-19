import { NavLink } from "react-router-dom";
import mountain from "../assets/icons/mountain.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import googlePlus from "../assets/icons/google-plus.svg";
import pinterest from "../assets/icons/pinterest.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={mountain} className="mountain" alt="Mountain logo" />
        <span>YOO</span>PIN
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/pages">Pages</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li><NavLink to="/extensions">Extensions</NavLink></li>
          <li><NavLink to="/tutorials">Tutorials</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
		</ul>
      </nav>

      <div className="social">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src={twitter} className="twitter" alt="Twitter" />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={facebook} className="facebook" alt="Facebook" />
      </a>

      <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
      <img src={googlePlus} className="googleplus" alt="Google Plus" />
      </a>

      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
      <img src={pinterest} className="pinterest" alt="Pinterest" />
      </a>
    </div>
    </header>
  );
}

export default Header;
