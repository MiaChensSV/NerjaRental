import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/burriana.jpg";
import Footer from "../components/Footer/Footer";
import Gallery from "../components/Gallery/Gallery";
import { allImages } from "../components/Data/ImageData";
import ScrollToTop from "../util/ScrollToTop";

function Photos() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Photos"
        btnClass="hide"
      />
      <Gallery images={allImages} />
      <Footer />
    </>
  );
}

export default Photos;
