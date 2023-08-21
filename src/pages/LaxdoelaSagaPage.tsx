import { useState } from "react";

import Kirkjubœr from "../component/LaxdoelaSaga/LaxMaps/Kirkjubœr";
import Norðmœrr from "../component/LaxdoelaSaga/LaxMaps/Norðmœrr";
import NorthAtlantic from "../component/LaxdoelaSaga/LaxMaps/NorthAtlantic";
import Norway from "../component/LaxdoelaSaga/LaxMaps/Norway";
import Raumsdal from "../component/LaxdoelaSaga/LaxMaps/Raumsdal";
import Sunnmœrr from "../component/LaxdoelaSaga/LaxMaps/Sunnmœrr";

import LaxInfoKp1 from "../component/LaxdoelaSaga/LaxInfoKp1";
import LaxTextKp1 from "../component/LaxdoelaSaga/LaxTextKp1";


export default function LaxdoelaSagaPage() {
  const [selectedLocation, setSelectedLocation] = useState("NorthAtlantic");
  console.log(setSelectedLocation)
  

  
  return (
    <section className="saga-layout">
      <div className="saga-text">
        <LaxTextKp1 />
      </div>
      <div className="saga-info-container">
      <div className="map-container" id="map-container">
          {selectedLocation === "Kirkjubœr" && <Kirkjubœr />}
          {selectedLocation === "Norðmœrr" && <Norðmœrr />}
          {selectedLocation === "Norway" && <Norway />}
          {selectedLocation === "Raumsdal" && <Raumsdal />}
          {selectedLocation === "Sunnmœrr" && <Sunnmœrr />}
          {selectedLocation === "NorthAtlantic" && <NorthAtlantic />}
        </div>
        <div className="info-container">
          <LaxInfoKp1 />
        </div>
      </div>
    </section>
  );
}
