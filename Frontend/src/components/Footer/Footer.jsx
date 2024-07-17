import "./FooterStyles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>
              <a className="footer-logo" href="/">
                Casa Mia
              </a>
            </h1>
            {/* <p>Choose your favourite destination.</p> */}
          </div>
          <div>
            {/* should the number be hidden? */}
            <a href="https://api.whatsapp.com/send?phone=46760666658">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61552953946352">
              <i className="fa-brands fa-facebook-square"></i>
            </a>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>About Apartment</h4>
            <a href="/apartment">Apartment Details</a>
            <a href="/price">Availabilities</a>
            <a href="/price">Price</a>
          </div>
          <div>
            <h4>Nerja</h4>
            <a href="/activities">Activities</a>
            <a href="/excursions">Excursions</a>
            <a href="/restaurants">Restaurants</a>
          </div>
          <div className="contact-footer">
            <h4>Contact US</h4>
            <div className="contact">
              <p className="title">Email: </p>
              <a href="mailto:info@vacationnerja.com?cc=miachensv@gmail.com&subject=Request%20for%20Casa%20Mia&body=I%20would%20like%20to%20ask%20about%20the%20availibility%20of%20apartment%20of%20Casa%20Mia%20in%20Nerja:">
                info@vacationnerja.com
              </a>
            </div>
            <div className="contact">
              <p className="title">Facebook: </p>
              <a href="https://www.facebook.com/profile.php?id=61552953946352">
                Casa Mia
              </a>
            </div>
            <div className="contact">
              <p className="title">Tourist License: VFT/MA/75214</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
