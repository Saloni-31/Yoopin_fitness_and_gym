import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">

            <span className="contact-label">CONTACT YOOPIN</span>

            <h1>
              We're here
              <br />
              <strong>to help.</strong>
            </h1>

            <p>
              Have a question about our products, your order,
              or your fitness journey? Get in touch with us.
            </p>

          </div>
        </div>
      </section>


      {/* ================= CONTACT AREA ================= */}
      <section className="contact-main">
        <div className="container contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <span className="contact-label">GET IN TOUCH</span>

            <h2>
              Let's talk
              <br />
              <strong>fitness.</strong>
            </h2>

            <div className="contact-divider"></div>

            <p className="contact-intro">
              Whether you need help choosing the right fitness gear
              or have a question about your order, our team is here
              to help.
            </p>


            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <a href="mailto:hello@yoopin.com">
                  hello@yoopin.com
                </a>
              </div>
            </div>


            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <span>Phone</span>
                <a href="tel:+919999999999">
                  +91 99999 99999
                </a>
              </div>
            </div>


            {/* Address */}
            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Address</span>
                <p>
                  YOOPIN Fitness
                  <br />
                  Indore, Madhya Pradesh
                  <br />
                  India
                </p>
              </div>
            </div>

          </div>


          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-wrapper">

            <div className="contact-form-heading">
              <span className="contact-label">SEND A MESSAGE</span>

              <h2>
                How can we
                <strong> help?</strong>
              </h2>
            </div>


            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>

              </div>


              <div className="form-group">
                <label htmlFor="subject">Subject</label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What can we help you with?"
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
              </div>


              <button type="submit" className="contact-submit">
                SEND MESSAGE
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* ================= HELP SECTION ================= */}
      <section className="contact-help">
        <div className="container">

          <div className="contact-help-heading">
            <span className="contact-label">NEED HELP?</span>

            <h2>
              We've got you
              <strong> covered.</strong>
            </h2>

            <p>
              Looking for something specific? Here are some common
              things we can help you with.
            </p>
          </div>


          <div className="help-grid">

            <div className="help-card">
              <span>01</span>
              <h3>Orders</h3>
              <p>
                Questions about your order, delivery or order status?
                We're happy to help.
              </p>
            </div>


            <div className="help-card">
              <span>02</span>
              <h3>Products</h3>
              <p>
                Need help choosing the right fitness equipment
                for your workout?
              </p>
            </div>


            <div className="help-card">
              <span>03</span>
              <h3>Returns</h3>
              <p>
                Need assistance with a return or exchange?
                Contact our support team.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="contact-bottom">
        <div className="container">

          <span className="contact-label">YOOPIN FITNESS</span>

          <h2>
            Keep moving.
            <br />
            <strong>We'll be here.</strong>
          </h2>

          <p>
            Explore our collection and find gear made for your journey.
          </p>

          <a href="/products" className="contact-shop-btn">
            SHOP FITNESS GEAR
          </a>

        </div>
      </section>

    </main>
  );
}

export default Contact;