import ConferenceCard from "../component/Resource Cards/ConferenceCard";
import JournalCard from "../component/Resource Cards/JournalCard";
import Opportunities from "../component/Resource Cards/Opportunities";
import SocietiesCard from "../component/Resource Cards/SocietiesCard";
import StudyPrograms from "../component/Resource Cards/StudyPrograms";
import TeachingAids from "../component/Resource Cards/TeachingAids";


export default function ResourcesPage() {
  return (
    <>
    <h1 className="resource-header-h">Resources</h1>
    <p className="resource-header-p">One of the most difficult questions when approaching a topic is this: "Where in the world do I look? Where can I look? What can I trust?" Whether you are new to a field and trying to get your bearings or someone who has been around the block and is looking to expand their repertoire, this is for you. Below is a collection of resources for a wide variety of topics within the field. 
    <br />
    If you see something that is missing or know of something that should be added, <a href="">submit an update</a> and we'll make sure it gets added. </p>
    <hr className="horizontal-row" />
    <div className="resource-layout">
      <JournalCard />
      <ConferenceCard />
      <StudyPrograms />
      <TeachingAids />
      <SocietiesCard />
      <Opportunities />
    </div>
    </>
  )
}
