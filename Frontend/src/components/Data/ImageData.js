import apartment from "../../assets/apartment.jpg";
import balcony from "../../assets/balcony.jpg";
import bathroom from "../../assets/bathroom.jpg";
import bedroom1 from "../../assets/bedroom1.jpg";
import bedroom11 from "../../assets/bedroom1-2.jpg";
import bedroom2 from "../../assets/bedroom2-1.jpg";
import bedroom22 from "../../assets/bedroom2-2.jpg";
import kitchen from "../../assets/kitchen.jpg";
import livingRoom from "../../assets/livingroom.jpg";
import pool from "../../assets/pool-1.jpg";
import pool2 from "../../assets/pool2.jpg";
import viewFromBedroom1 from "../../assets/view-from-bedroom1.jpg";

const allImages = [
  apartment,
  balcony,
  pool,
  pool2,
  kitchen,
  bedroom1,
  viewFromBedroom1,
  bedroom11,
  bedroom2,
  bedroom22,
  livingRoom,
  bathroom,
  // Add more image URLs here
];

const aboutApartmentImage = allImages.slice(0, 12);

export { aboutApartmentImage, allImages };