import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero">
      <div id="heroSlider" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">

          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="./src/assets/images/hero-bg.png" className="d-block w-100" alt="Hero background" />
            <div className="overlay"></div>
            <div className="carousel-caption">
              <h1>DELIVERING THE QUALITY <br />WORK AFFORDABLE</h1>
              <h6>power by psdfreebies.com</h6>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget <br />
                lacinia odio sem nec elit. Aenean eu leo quam </p>
              <Link to="/login" className="btn btn-outline-light">Login</Link>
			  <Link to="/signup" className="btn btn-warning">Sign Up</Link>
            </div>
			</div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="./src/assets/images/hero-bg.png" className="d-block w-100" alt="Hero background" />
            <div className="overlay"></div>
            <div className="carousel-caption">
              <h1>TEMPLATE_1</h1>
              <h4>Made by Saloni Sharma & Tanisha Baghel</h4>
              <p>Template conversion using HTML, CSS and BOOTSTRAP</p>
              <button className="btn btn-light">View More</button>
              <button className="btn btn-light">Contact Us</button>
            </div>
          </div>

        </div>

        {/* Previous button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* Next button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroSlider"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
