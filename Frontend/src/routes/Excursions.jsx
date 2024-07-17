import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/Running.jpg";
import Footer from "../components/Footer/Footer";
import DayTrips from "../components/DayTrips/DayTrips";
import ScrollToTop from "../util/ScrollToTop";

function Excursions() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Excursions"
        btnClass="hide"
      />
      <DayTrips />
      <Footer />
    </>
  );
}

export default Excursions;
