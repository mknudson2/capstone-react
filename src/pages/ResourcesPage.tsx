import ConferenceCard from "../component/Resource Cards/ConferenceCard";
import JournalCard from "../component/Resource Cards/JournalCard";
import Opportunities from "../component/Resource Cards/Opportunities";
import SocietiesCard from "../component/Resource Cards/SocietiesCard";
import StudyPrograms from "../component/Resource Cards/StudyPrograms";
import TeachingAids from "../component/Resource Cards/TeachingAids";


export default function ResourcesPage() {
  return (
    <>
    <h1 className="resource-header-h">Lorem ipsum dolor sit amet.</h1>
    <p className="resource-header-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt debitis, soluta corrupti, magnam unde sint odit vitae assumenda quia nisi eius, exercitationem accusantium similique sunt? Nihil, iusto quis delectus impedit rem minus reiciendis accusantium provident numquam fuga magnam, totam consequuntur recusandae laudantium animi repudiandae quibusdam cupiditate doloremque dolore est! Porro?</p>
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
