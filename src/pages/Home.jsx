import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import Products from "../components/Products";
import News from "../components/News";
import Services from "../components/Services";
import Video from "../components/Video";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <News />
      <Video />
      <Footer />
    </>
  );
}

export default Home;