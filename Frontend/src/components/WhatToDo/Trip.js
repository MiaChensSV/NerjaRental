import "./TripStyles.css";
import TripData from "./TripData";
import CueveDeNerja from "../../assets/cueva-de-nerja.jpg";
import SierraNevada from "../../assets/Sierra-Nevada.jpg";
import RioChillar from "../../assets/rio-chillar-nerja-en-pt.jpg";
import kayak from "../../assets/kayak.jpg";
import Padel from "../../assets/padel.jpg";
import Frigiliana from "../../assets/Frigiliana.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>
        What to do<span> in Nerja</span> ?
      </h1>
      <div className="tripcard">
        <TripData
          image={CueveDeNerja}
          heading="Cueva de Nerja"
          text="Cueva de Nerja, 3 km from Nerja's center, is a cave system discovered in 1959. It features 20,000-year-old artifacts and impressive formations, hosting concerts and events with a restaurant and museum on site."
          link="/activities"
        />
        <TripData
          image={SierraNevada}
          heading="Sierra Nevada"
          text="In the Sierra Nevada there are 18 green, 40 blue, 50 red and 8 black pistes. The area has a low avalanche risk and offers good off-piste skiing. The ski area is divided into several parts."
          link="/excursions"
        />
        <TripData
          image={Frigiliana}
          heading="Frigiliana"
          text="Frigiliana, near Nerja in the Almijara mountains, is a historic gem. Explore its charming streets and Mudéjar neighborhood, enjoy tapas and visit nearby natural park and Pozo Batan Alberca pool."
          link="/excursions"
        />
        <TripData
          image={RioChillar}
          heading="Rio Chillar"
          text="The Rio Chillar river walk in Nerja is a popular trail through Tejeda, Almijara, and Alhama Reserves. Hike through a marble gorge, bathe in natural pools, and see a waterfall. Perfect for cooling off in high temperatures."
          link="/excursions"
        />

        <TripData
          image={Padel}
          heading="Tennis/Padel"
          text="Nerja Padel offers training for beginners and advanced players, helping you learn or improve your skills in Nerja's wind and sunshine. Talented coaches provide courses from beginner level to advanced."
          link="/activities"
        />
        <TripData
          image={kayak}
          heading="Diving/Kayak"
          text="
The kayak trail from Burriana to Maro beach is one of Andalucia's most beautiful. Paddle past caves, beaches, and waterfalls. Dive in Nerja's Maro-Cerro Gordo Park with the only authorized company in Malaga."
          link="/activities"
        />
      </div>
    </div>
  );
}

export default Trip;
