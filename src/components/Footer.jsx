import facebookIcon from "../assets/icons/facebook1.svg";
import twitterIcon from "../assets/icons/twitter1.svg";
import dribbbleIcon from "../assets/icons/dribbble.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import beeIcon from "../assets/icons/bee.svg";
function Footer() {
  return (
    <>
      <footer className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h6>About PSDfreebies.com</h6>
              <p>
                Looking cautiously round, to ascertain that they were not overheard,
                the two hags cowered nearer to the fire, and chuckled heartily.
              </p>
              <div className="social-badges">
                <a href="#" className="badge-fb">
                  <img src={facebookIcon} alt="Facebook" className="social-icon" /> 136
                </a>
                <a href="#" className="badge-tw">
                  <img src={twitterIcon} alt="Twitter" className="social-icon" /> 68
                </a>
                <a href="#" className="badge-dr">
                  <img src={dribbbleIcon} alt="Dribbble" className="social-icon" /> 16
                </a>
                <a href="#" className="badge-li">
                  <img src={linkedinIcon} alt="LinkedIn" className="social-icon" /> 13
                </a>
              </div>
            </div>

            <div>
              <h6>About Us</h6>
              <ul className="footer-links">
                <li><a href="#">Company</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>

            <div>
              <h6>Services</h6>
              <ul className="footer-links">
                <li><a href="#">Branding</a></li>
                <li><a href="#">UX Design</a></li>
                <li><a href="#">Prototype</a></li>
                <li><a href="#">UI Design</a></li>
              </ul>
            </div>

            <div>
              <h6>Contact</h6>
              <div className="contact-info">
                <p>(415) 496-9612</p>
                <p>920 Reserve</p>
                <p>Roseville, CA 95678</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <div>&copy; 2016 PSDfreebies.com &mdash; All Right Reserved</div>
            <div className="brand">
              Design by: <img src={beeIcon} alt="Bee logo" className="bee-icon" /> PSDFreebies.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
