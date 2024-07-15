import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import Price from "../components/Price/Price";
import Availability from "../components/Calendar/Availability";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/PlayaElChucho.jpg";
import PriceInclude from "../components/RentingInclude/Include";
import Gallery from "../components/Gallery/Gallery";
import { aboutApartmentImage } from "../components/Data/ImageData";
import ScrollToTop from "../util/ScrollToTop";

function AvailabilityAndPrice() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Availablity and prices"
        btnClass="hide"
      />
      <PriceInclude />
      <Price />
      <Availability monthsShown={3} />
      <Gallery images={aboutApartmentImage} />
      <Footer />
    </>
  );
}

export default AvailabilityAndPrice;
