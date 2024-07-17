import "../RentingInclude/Include.css";
function Include() {
  return (
    <div className="price-include-container">
      <h1>Welcome to rent Casa Mia with the best location Parador</h1>
      <h2>150 meters to the beach and 500 meters to Balcón de Europa</h2>
      <hr className="separate-sections" />
      <ul className="rules">
        <li>
          Minimum 7 days during May-October. Minimum 5 days during
          November-March.
        </li>
        <li>
          Mandatory cleaning fee and linen/towels for 4 people included (Not for
          beach use)
        </li>
        <li>
          A/C for cooling and heating, Wi-Fi/Internet over fibre, TV with
          Swedish, Dutch, Germany, English, Spanish, dishwasher, washing
          machine, as well as electricity and water. Final cleaning is included
          (not dishes).
        </li>
        <li>
          When booking you pay a booking fee of 30 % of the rental charge and 60
          days before arriving, the rest of the rental charge should be paid.{" "}
        </li>
        <li>
          When booking for at least three consecutive weeks, a discount is
          given.
        </li>
        <li>
          During the period November-March, it is possible to "long-term rent"
          if you rent for at least 31 consecutive days.
        </li>
        <li>
          Those prices are dynamic and are affected by our occupancy rate, how
          many people it is rented to, the length of the rental period and when
          the rental period is postponed.
          <a href="./contact" className="request">
            <strong>Requests for quotation!</strong>
          </a>
        </li>
        <li>No smoking or pets are allowed in Casa Mia.</li>
        <li>
          We are happy to help you with transfers or car rentals for the best
          transport between the airport and Casa Mia.
        </li>
      </ul>
    </div>
  );
}

export default Include;
