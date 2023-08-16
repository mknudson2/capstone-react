import BpSICard from "../component/TextCards/BpSICard";
import BpSIICard from "../component/TextCards/BpSIICard";
import BpSIIICard from "../component/TextCards/BpSIIICard";
import FaerCard from "../component/TextCards/FaerCard";
import LaxCard from "../component/TextCards/LaxCard";
import NjalaCard from "../component/TextCards/NjalaCard";
import OsOCard from "../component/TextCards/OsOCard";
import SverrisCard from "../component/TextCards/SverrisCard";

export default function TextsPage() {
    
  return (
    <div className="texts-container">
        <LaxCard />
        <OsOCard />
        <SverrisCard />
        <FaerCard/>
        <NjalaCard />
        <BpSICard />
        <BpSIICard />
        <BpSIIICard />
    </div>
  )
}
