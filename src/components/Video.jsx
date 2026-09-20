import { useState } from "react";
import "../styles/Video.css";

const tutorials = [
  {
    id: 1,
    title: "Morning Yoga for Beginners",
    category: "Yoga",
    videoId: "EOoqK2kwfUk",
  },
  {
    id: 2,
    title: "10 Minute Morning Yoga",
    category: "Yoga",
    videoId: "xA9bKP8Oheo",
  },
  {
    id: 3,
    title: "Full Body Beginner Workout",
    category: "Workout",
    videoId: "EOoqK2kwfUk",
  },
  {
    id: 4,
    title: "Upper Body Workout",
    category: "Strength",
    videoId: "xA9bKP8Oheo",
  },
  {
    id: 5,
    title: "Full Body Stretching",
    category: "Stretching",
    videoId: "EOoqK2kwfUk",
  },
  {
    id: 6,
    title: "Beginner Strength Training",
    category: "Strength",
    videoId: "xA9bKP8Oheo",
  },
];

const categories = [
  "All",
  "Workout",
  "Yoga",
  "Stretching",
  "Strength",
];

function Video() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTutorials =
    activeCategory === "All"
      ? tutorials
      : tutorials.filter(
          (video) => video.category === activeCategory
        );

  return (
    <section className="tutorials-section">
      <div className="container">

        <div className="tutorials-heading">
          <p className="tutorials-subtitle">YOOPIN FITNESS</p>

          <h2 className="section-title">
            <strong>Train smarter.</strong> Move better.
          </h2>

          <div className="divider"></div>

          <p className="tutorials-description">
            Follow simple workout, yoga and stretching tutorials
            designed to help you move, train and feel better.
          </p>
        </div>

        {/* Categories */}
        <div className="tutorial-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Videos */}
        <div className="tutorial-grid">
          {filteredTutorials.map((video) => (
            <div className="tutorial-card" key={video.id}>

              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="tutorial-content">
                <span className="tutorial-category">
                  {video.category}
                </span>

                <h3>{video.title}</h3>

                <p>
                  Follow along with this YOOPIN fitness tutorial.
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Video;

