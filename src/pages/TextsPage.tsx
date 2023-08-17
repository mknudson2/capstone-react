import React, { useState } from "react";
import TextTypeButton from "../component/TextCards/TextTypeButton";
import BpSICard from "../component/TextCards/BpSICard";
import BpSIICard from "../component/TextCards/BpSIICard";
import BpSIIICard from "../component/TextCards/BpSIIICard";
import FaerCard from "../component/TextCards/FaerCard";
import LaxCard from "../component/TextCards/LaxCard";
import NjalaCard from "../component/TextCards/NjalaCard";
import OsOCard from "../component/TextCards/OsOCard";
import SverrisCard from "../component/TextCards/SverrisCard";
import VoluspaCard from "../component/TextCards/VoluspaCard";

export default function TextsPage() {
  const [selectedTextType, setSelectedTextType] = useState("Prose");

  const handleTextTypeClick = (textType) => {
    setSelectedTextType(textType);
  };

  const getTextTypeCards = () => {
    if (selectedTextType === "Prose") {
      return (
        <>
          <LaxCard />
          <OsOCard />
          <SverrisCard />
          <FaerCard />
          <NjalaCard />
          <BpSICard />
          <BpSIICard />
          <BpSIIICard />
        </>
      );
    } else if (selectedTextType === "Poetry") {
      return (
        <>
          <VoluspaCard />
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className="text-type-btn-container">
        <TextTypeButton 
            selectedTextType={selectedTextType}
            onTextTypeClick={handleTextTypeClick}/>
      </div>
      <div className="texts-container">
        {getTextTypeCards()}
      </div>
    </>
  );
}
