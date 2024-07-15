import Beaches from "../components/Beaches/Beaches";
import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/burriana.jpg";
import ScrollToTop from "../util/ScrollToTop";

function NerjaBeaches() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Beaches"
        btnClass="hide"
      />
      <Beaches />
      <Footer />
    </>
  );
}

export default NerjaBeaches;
