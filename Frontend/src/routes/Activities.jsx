import ActivityList from "../components/Activities/Activities";
import Navbar from "../components/Navbar/Navbar";
import HomeHero from "../components/Hero/HomeHero";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/activities.jpg";
import ScrollToTop from "../util/ScrollToTop";
function Activities() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        btnClass="hide"
        title="Activities"
      />
      <ActivityList />
      <Footer />
    </>
  );
}

export default Activities;
