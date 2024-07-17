import "../AboutApartment/AboutApartmentStyles.css";

function AboutApartment() {
  return (
    <div className="about-container">
      <h1>Casa Mia - Parador</h1>
      <p>
        Fantastic 2 bedroom apartment with communal swimming pool and gardens
        centrally located in the complex of Coronado. The property is situated
        on the 3rd floor (with lift) and once inside comprises of the following:
        <br />
        <br />
        Upon entrance is an independent kitchen which is very well equipped with
        ceramic hob, microwave – oven, fridge-freezer, dishwasher, electric
        kettle, coffee machine, toaster, iron and ironing board and all of the
        necessary crockery and utensils to cook / eat with. <br />
        <br />
        Past the entrance hall is the open plan living-dining room, furnished
        with a comfortable sofa, armchair, dining table and chairs that can seat
        up to four people. There is TV with Spanish and international channels,
        AC and WIFI internet throughout the apartment. <br />
        <br />
        From the living room there is access to an east-facing terrace with
        plenty of morning sunshine and views over the communal swimming pool and
        the town of Nerja it is equipped with a table and four chairs. <br />
        <br />
        There are two bedrooms: the main bedroom is fitted with one large double
        bed with two separate mattresses put together, built-in wardrobes and
        AC. The second bedroom has two single beds, built-in wardrobes and AC.
        <br />
        <br />
        Between both bedrooms is a spacious modern shower room, here is where
        you will find the washing machine.
        <br />
        <br />
        Overall, this modern apartment is centrally located within walking
        distance from the town centre and beaches, it has a communal swimming
        pool which is open all year round and is ideal for any couple or family
        looking to spend their holidays in the heart of Nerja.
      </p>
      <h1>Location</h1>
      <p>
        The apartment is in the most sought after area - Parador. <br />
        <br />
        It is near all amenities such as supermarkets, bars and restaurants,
        pharmacies, public transport links… <br />
        <br />
        The Balcon de Europa is a short walk of 500-600 m.
        <br />
        <br />
        Carabeillo and Carabeo beaches are just 150 m away and the famous and
        busy BURRIANA beach is no more than 250 m- 300 m. <br />
        <br />
        There is a bakery, a supermarket, a shoe shop and at least a dozen
        restaurants in Calle Huertos or in the surrounding streets of Calle
        Frigiliana and Calle San Pedro.
      </p>
      <div id="mainFeatures">
        <h3 className="subtitle-ficha">Special features</h3>
        <div className="features">
          <div className="feature">
            <div>
              <i className="fa-regular fa-water-ladder"></i>
              <span>Swimming pool</span>
            </div>
          </div>
          <div className="feature">
            <div>
              <i className="fa-solid fa-wifi"></i>
              <span>Internet</span>
            </div>
          </div>
          <div className="feature">
            <div>
              <i className="fa-regular fa-air-conditioner"></i>{" "}
              <span>Air-Conditioned</span>
            </div>
          </div>
          <div className="feature">
            <div>
              <i className="fa-solid fa-tv"></i> <span>TV</span>
            </div>
          </div>
        </div>
      </div>
      <div id="bedrooms">
        <hr className="separate-sections" />
        <h3 className="subtitle-ficha">Distribution of bedrooms</h3>
        <div className="bedrooms">
          <div className="bedroom-item ">
            <div className="bed-icons">
              <i className="fa-sharp fa-light fa-bed-front"></i>
            </div>
            <span className="room-type">Bedroom 1</span>
            <div className="bed">
              <span className="bed-type">1 Double bed</span>
            </div>
          </div>

          <div className="bedroom-item ">
            <div className="bed-icons">
              <i className="fa-sharp fa-light fa-bed-front"></i>
              <i className="fa-sharp fa-light fa-bed-front"></i>
            </div>
            <span className="room-type">Bedroom 2</span>
            <div className="bed">
              <span className="bed-type">2 Single beds</span>
            </div>
          </div>
        </div>
      </div>
      <div id="kitchen">
        <hr className="separate-sections" />
        <h3 className="subtitle-ficha">Independent kitchen</h3>
        <div className="kitchen-items">
          <div className="kitchen-item ">
            <span>Refrigerator</span>
          </div>
          <div className="kitchen-item ">
            <span>Microwave</span>
          </div>
          <div className="kitchen-item ">
            <span>Oven</span>
          </div>
          <div className="kitchen-item ">
            <span>Dishwasher</span>
          </div>

          <div className="kitchen-item ">
            <span>Kettle</span>
          </div>
          <div className="kitchen-item ">
            <span>Dishes/Cutlery</span>
          </div>
          <div className="kitchen-item ">
            <span>Toaster</span>
          </div>
          <div className="kitchen-item ">
            <span>Kitchen utensils</span>
          </div>
          <div className="kitchen-item ">
            <span>Coffee machine</span>
          </div>
        </div>
      </div>
      <div id="general">
        <hr className="separate-sections" />
        <h3 className="subtitle-ficha">General</h3>
        <span id="touristicRegistrationNumber">
          Accommodation Registration Number: VUT/MA/75214
        </span>
        <div className="general-items">
          <div className="general-item ">
            <span>63 m² Property</span>
          </div>
          <div className="general-item ">
            <span>TV</span>
          </div>
          <div className="general-item ">
            <span>Satellite TV</span>
          </div>
          <div className="general-item ">
            <span>3rd floor</span>
          </div>
          <div className="general-item ">
            <span>Lift</span>
          </div>{" "}
          <div className="general-item ">
            <span>Balcony</span>
          </div>
          <div className="general-item ">
            <span>Washing machine</span>
          </div>
          <div className="general-item ">
            <span>Iron</span>
          </div>
          <div className="general-item ">
            <span>Internet</span>
          </div>
          <div className="general-item more-items">
            <span>Heat pump</span>
          </div>
          <div className="general-item more-items">
            <span>Air-Conditioned</span>
          </div>
          <div className="general-item more-items">
            <span>Communal Swimming pool</span>
          </div>
        </div>
      </div>
      <div id="mandatoryServices">
        <hr className="separate-sections" />
        <h3 className="subtitle-ficha">Mandatory or included services</h3>
        <div>
          <div className="mandatory-item ">
            <span>Air conditioning: Included</span>
          </div>
          <div className="mandatory-item ">
            <span>Bed linen: Included</span>
          </div>
          <div className="mandatory-item ">
            <span>Final Cleaning: Included</span>
          </div>
          <div className="mandatory-item ">
            <span>Heating: Included</span>
          </div>
          <div className="mandatory-item ">
            <span>Internet Access: Included</span>
          </div>
          <div className="mandatory-item ">
            <span>Towels: Included</span>
          </div>
        </div>
      </div>
      <div id="schedules">
        <hr className="separate-sections" />
        <h3 className="subtitle-ficha">Your schedule</h3>
        <div className="schedule">
          <div className="horario-entrada">
            <img
              src="https://crs.avantio.com/default/imagenes/ficha/entrada.svg"
              alt="Check-in"
              loading="lazy"
            />
            <div>
              <span>Check-in </span>
              <span>
                <b> from 16:00 to 0:00</b>
              </span>
            </div>
          </div>
          <div className="horario-salida">
            <img
              src="https://crs.avantio.com/default/imagenes/ficha/salida.svg"
              alt="Check-out"
              loading="lazy"
            />
            <div>
              <span>Check-out</span>
              <span>
                <b>Before 10:00</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="observacionesGA" className="box-left">
        <h2 className="class_title">Comments</h2>
        <hr className="separate-sections" />
        <div className="observaciones_text">
          <div className="line">
            <div className="column-md-12">
              <span className="textDA">
                - This accommodation does not accept groups of young people (Up
                to 20 years)
                <br />
              </span>
              <span className="textDA">
                - No smoking
                <br />
              </span>
              <span className="textDA"></span>
              <span className="textDA">
                - No pets allowed
                <br />
              </span>
              <span className="textDA"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutApartment;
