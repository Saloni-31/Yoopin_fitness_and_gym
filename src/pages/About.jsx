import "../styles/About.css";

function About() {
  return (
    <main className="about-page">

      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-label">ABOUT YOOPIN</span>

          <h1>
            Built for the way
            <br />
            <strong>you train.</strong>
          </h1>

          <p>
            Premium fitness gear designed to help you move better,
            train harder and live stronger.
          </p>
        </div>
      </section>


      {/* ================= OUR STORY ================= */}
      <section className="about-story">
        <div className="container about-story-grid">

          <div className="about-story-image">
            <img
              src="../public/images/about-fitness.jpg"
              alt="YOOPIN fitness training"
            />
          </div>

          <div className="about-story-content">
            <span className="about-label">OUR STORY</span>

            <h2>
              Fitness is not just
              <strong> a workout.</strong>
            </h2>

            <div className="about-divider"></div>

            <p>
              YOOPIN was created with one simple idea — fitness should
              feel accessible, motivating and rewarding.
            </p>

            <p>
              From everyday workouts to serious training sessions,
              we create fitness essentials that combine practical
              design, dependable quality and modern style.
            </p>

            <p>
              Whether you're starting your fitness journey or pushing
              toward your next goal, YOOPIN is here to move with you.
            </p>
          </div>

        </div>
      </section>


      {/* ================= WHY YOOPIN ================= */}
      <section className="why-yoopin">
        <div className="container">

          <div className="about-section-heading">
            <span className="about-label">WHY YOOPIN</span>

            <h2>
              Made to keep you
              <strong> moving.</strong>
            </h2>

            <p>
              Everything we create is designed around the way people
              actually train.
            </p>
          </div>


          <div className="about-features">

            <div className="about-feature">
              <div className="feature-number">01</div>

              <h3>Quality First</h3>

              <p>
                We focus on reliable materials and thoughtful details
                that are made for everyday training.
              </p>
            </div>


            <div className="about-feature">
              <div className="feature-number">02</div>

              <h3>Built for Performance</h3>

              <p>
                Our products are designed to support your movement,
                workouts and active lifestyle.
              </p>
            </div>


            <div className="about-feature">
              <div className="feature-number">03</div>

              <h3>Simple & Modern</h3>

              <p>
                Clean designs, practical features and a style that
                fits naturally into your everyday life.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FITNESS BANNER ================= */}
      <section className="fitness-banner">
        <div className="container">

          <div className="fitness-banner-content">
            <span className="about-label">YOUR JOURNEY. YOUR PACE.</span>

            <h2>
              Stronger starts
              <br />
              <strong>with one step.</strong>
            </h2>

            <p>
              Start where you are. Train at your pace. Keep moving.
            </p>

            <a href="/products" className="about-btn">
              SHOP FITNESS GEAR
            </a>
          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="about-cta">
        <div className="container">

          <span className="about-label">KEEP MOVING</span>

          <h2>
            Train hard.
            <br />
            <strong>Live strong.</strong>
          </h2>

          <p>
            Discover the YOOPIN collection and make every workout count.
          </p>

          <a href="/products" className="about-cta-btn">
            EXPLORE COLLECTION
          </a>

        </div>
      </section>

    </main>
  );
}

export default About;