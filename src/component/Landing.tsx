import GrammarCard from "./GrammarCard";
import HeroImg from "./HeroImg";
import ResourcesCard from "./ResourcesCard";
import TextsCard from "./TextsCard";

export default function Landing() {
  return (
    <>
      <HeroImg />
      <div className="card-container">
        <GrammarCard />
        <TextsCard />
        <ResourcesCard />
      </div>
      <hr className="horizontal-row" />
      {/* <CommunityHighlights />  */}
      {/* <Footer /> */}
    </>
  );
}
