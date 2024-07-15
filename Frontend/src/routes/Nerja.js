import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutNerja from "../components/Nerja/Nerja";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/nerja1.jpg";
import ScrollToTop from "../util/ScrollToTop";

function Nerja() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Nerja, Costa del Sol"
        btnClass="hide"
      />
      <AboutNerja />
      <Footer />
    </>
  );
}

export default Nerja;
