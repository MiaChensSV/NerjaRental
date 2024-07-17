import React from "react";
import "./styles.css";
import Home from "./routes/Home";
import Apartment from "./routes/Apartment";
import Nerja from "./routes/Nerja";
import AvailabilityAndPrice from "./routes/AvailabilityAndPrice";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Pictures from "./routes/Photos";
import NerjaBeaches from "./routes/NerjaBeaches";
import Activities from "./routes/Activities";
import Restaurants from "./routes/Restaurants";
import Excursions from "./routes/Excursions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nerja" element={<Nerja />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/price" element={<AvailabilityAndPrice />} />
        <Route path="/photos" element={<Pictures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beaches" element={<NerjaBeaches />}></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/restaurants" element={<Restaurants />}></Route>
        <Route path="/excursions" element={<Excursions />}></Route>
      </Routes>
    </div>
  );
}

export default App;
