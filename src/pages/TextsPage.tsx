import { useState } from "react";
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

  const handleTextTypeClick = (textType: string) => {
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
    <h5 className="text-collection-header">Readily accessible to both veteran and Newcomers alike, these digital editions of the Old Norse literary corpus will be an invaluable resource.</h5>
    <p className="text-collection-p">Each text comes in three forms: Normalized Old Norse, Dual-facing Old Norse/Modern Enlgish, and Modern English translation. Regardless of the edition you choose to use, you will have access to maps of each named location, genealogical trees to organize the hoard of names presented, and articles tailored to those themes specific to the particular work. In addition, the Old Norse editions come complete with full grammatical information for each word and phrase, allowing you to hone your language skills or assist when you get stuck. </p>
    <hr className="horizontal-row"/>
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
