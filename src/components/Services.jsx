function Services() {
  return (
    <section className="services">
      <div className="container">
        <h2>Welcome to the YooPin Services</h2>
        <div className="line"></div>
        <p className="service-text">
          Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue
          laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet.
        </p>
        <div className="row mt-5">
          <div className="col-md-4 service-box">
            <i className="bi bi-pencil-square service-icon"></i>
            <h4>FEATURE ONE</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet.</p>
          </div>

          <div className="col-md-4 service-box">
            <i className="bi bi-search service-icon"></i>
            <h4>FEATURE TWO</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet.</p>
          </div>

          <div className="col-md-4 service-box">
            <i className="bi bi-chat-dots service-icon"></i>
            <h4>FEATURE THREE</h4>
            <p>Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
