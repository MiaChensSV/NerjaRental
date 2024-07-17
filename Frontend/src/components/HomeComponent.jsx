import React from "react";
import apartment from "../assets/apartment.jpg";
import balconyDeEuropa from "../assets/balconyDeEuropa.jpg";
import burrina from "../assets/burriana.jpg";
import playaElChucho from "../assets/PlayaElChucho.jpg";
import HomeData from "./HomeData";

const HomeComponent = () => {
  return (
    <>
      <div className="destination">
      
        <HomeData
          className="first-des"
          heading="Casa Mia, Parador"
          text="Fantastic 2 bedroom apartment with fantastic pool, gardens and mountain views in Parador, Nerja! Centrally located in the complex of Coronado. Perfect location: only 150 m to the beach, 5 minutes to Balcon de Europa! Close to supermarkets, bars, restaurants, and pharmacies for your convenience! "
          img1={apartment}
          img2={balconyDeEuropa}
        />

        <HomeData
          className="first-des-reverse"
          heading="Best beach"
          text="Burriana, considered one of the best in Nerja, stands out for its crystal clear waters. Its wide variety of amenities and updated facilities make it a popular destination for both locals and visitors. It possesses a Q for Quality seal since 2018 and has flown the Blue Flag year after year. At the west part of Nerja, you will ll find the best sunset beach in town(Playa El Chuncho)! there are some amazing sunsets here!"
          img1={burrina}
          img2={playaElChucho}
        />
      </div>
    </>
  );
};

export default HomeComponent;

