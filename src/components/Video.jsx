function Video() {
  return (
    <section className="video-section">
      <div className="container">
        <h2 className="section-title"><strong>Watch</strong> our new video</h2>
        <div className="divider divider-light"></div>

        <div className="video-frame">
          <img src="./src/assets/images/video-thumbnail.jpg" alt="Watch our new video" />
          <div className="play-btn"><span className="play-triangle"></span></div>
        </div>
      </div>
    </section>
  );
}

export default Video;
