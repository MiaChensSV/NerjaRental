import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutApartment from "../components/AboutApartment/AboutApartment";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/balcony-2.jpg";
import Map from "../components/Location/Location";
import ScrollToTop from "../util/ScrollToTop";

function Apartment() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero cName="hero-mid" heroImg={AboutImg} btnClass="hide" />
      <AboutApartment />
      <Map />
      <Footer />
    </>
  );
}

export default Apartment;
