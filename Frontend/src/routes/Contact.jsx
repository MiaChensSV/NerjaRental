import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import AboutImg from "../assets/pool3.jpg";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../util/ScrollToTop";
import Form from "../components/Form/Form"

function Contact() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <Form />
      <Footer />
    </>
  );
}

export default Contact;
