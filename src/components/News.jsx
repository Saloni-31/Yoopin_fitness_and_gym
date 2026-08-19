function News() {
  return (
    <section className="news-section">
      <div className="overlay"></div>

      <div className="container position-relative">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="news-title">Latest News and Event</h2>
            <div className="title-line"></div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-3 p-0">
            <img src="./src/assets/images/news-img.png" className="img-fluid news-img" alt="News" />
          </div>

          <div className="col-lg-3 news-content text-center">
            <h5>AKITA INU DOG</h5>
            <p>
              Cum sociis natoque penatibus et
              magnis dis parturient montes,
              nascetur ridiculus mus. Lorem
              ipsum dolor sit amet, consectetur.
            </p>
            <a href="#" className="btn btn-news">View more</a>
          </div>

          <div className="col-lg-3 p-0">
            <img src="./src/assets/images/news3.png" className="img-fluid news-img" alt="News" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
