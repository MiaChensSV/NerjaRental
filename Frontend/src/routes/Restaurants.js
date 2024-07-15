import RestaurantTips from "../components/RestaurantTips/RestaurantTips";
import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/tapas-casares.jpg";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../util/ScrollToTop";

function Restaurants() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        btnClass="hide"
        title="Restaurants Tips"
      />
      <RestaurantTips />
      <Footer />
    </>
  );
}

export default Restaurants;
