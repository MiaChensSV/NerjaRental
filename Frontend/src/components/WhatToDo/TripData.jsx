import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="trip" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      {props.link && (
        <a href={props.link} className="trip-link">
          Read more
        </a>
      )}
    </div>
  );
}

export default TripData;
