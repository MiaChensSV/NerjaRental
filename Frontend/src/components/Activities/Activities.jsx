import "../Activities/Activities.css";
import ActivitiesData from "../Data/ActivitiesData";

function ActivityList() {
  return (
    <>
      <div className="activity-container">
        {ActivitiesData.map((activity, index) => (
          <div className="section" key={index}>
            <div className="image">
              <img src={activity.image} alt={activity.title} />
            </div>
            <div className="paragraph">
              <span className="title">{activity.title}</span>
              <br />
              <span>{activity.text}</span>
              <br /> <br />
              {activity.text2 && <span>{activity.text2}</span>}
              <br />
              {activity.clubName && <span>{activity.clubName}</span>}
              <br />
              {activity.website && <a href={activity.website}>{activity.website}</a> }
              <br />
              {activity.address && <span>{activity.address}</span>}
              <br />
              {activity.tel && <span>Tel: {activity.tel}</span>}
              <br />
              {activity.email && <span>Email: {activity.email}</span>}
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ActivityList;
