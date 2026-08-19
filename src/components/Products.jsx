function Products() {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="text-center product-title">Our Products</h2>
        <div className="title-line"></div>
        <p className="product-para text-center">
          Aenean lacinia bibendum nulla sed consectetur.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        </p>

        <div className="row mt-5">
          {/* Left Content */}
          <div className="col-lg-3 d-flex align-items-center">
            <div>
              <h4>AKITA INU DOG</h4>
              <hr />
              <p>
                Cum sociis natoque penatibus et
                magnis dis parturient montes,
                nascetur ridiculus mus.
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Donec sed odio dui.
                Vivamus sagittis lacus vel augue.
              </p>
              <a href="#" className="btn btn-product">View more</a>
            </div>
          </div>

          {/* Left Image */}
          <div className="col-lg-2 text-center">
            <img src="./src/assets/icons/1.svg" className="product-img" alt="Product" />
          </div>

          {/* Right Content */}
          <div className="col-lg-3 d-flex align-items-center">
            <div>
              <h4>AKITA INU DOG</h4>
              <hr />
              <p>
                Cum sociis natoque penatibus et
                magnis dis parturient montes,
                nascetur ridiculus mus.
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Donec sed odio dui.
                Vivamus sagittis lacus vel augue.
              </p>
              <a href="#" className="btn btn-product">View more</a>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-2 text-center">
            <img src="./src/assets/icons/2.svg" className="product-img" alt="Product" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
