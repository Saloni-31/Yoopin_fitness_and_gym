import Hero from "../components/Hero";
import Services from "../components/Services";
import Welcome from "../components/Welcome";
import News from "../components/News";
import Products from "../components/Products";
import Video from "../components/Video";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Welcome />
      <News />
      <Products />
      <Video />
      <Footer />
    </>
  );
}

export default Home;