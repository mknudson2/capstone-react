import FaerCard from "../component/TextCards/FaerCard";
import LaxCard from "../component/TextCards/LaxCard";
import OsOCard from "../component/TextCards/OsOCard";
import SverrisCard from "../component/TextCards/SverrisCard";

export default function TextsPage() {
    
  return (
    <div className="texts-container">
        <LaxCard />
        <OsOCard />
        <SverrisCard />
        <FaerCard/>
    </div>
  )
}
