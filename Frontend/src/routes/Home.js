import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import HomeComponent from "../components/HomeComponent";
import Footer from "../components/Footer/Footer";
import Trip from "../components/WhatToDo/Trip";
import nerja from "../assets/balconyDeEuropa.jpg";
import ScrollToTop from "../util/ScrollToTop";

function Home() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero"
        heroImg={nerja}
        title="Experience the magic of Nerja"
        text="Book with us and discover why it's the Costa del Sol’s best-kept secret."
        btnClass="show"
        buttonText="Book now"
        url="/contact"
      />
      <HomeComponent />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
