import GrammarDisplay from "../component/GrammarDisplay";
import GrammarSidebar from "../component/GrammarSidebar";

export default function GrammarPage() {
  return (
    <div className="grammar-page-layout">
      <div className="grammar-side-nav">
        <GrammarSidebar />
      </div>
      <div className="grammar-main-display">
        <GrammarDisplay />
      </div>
    </div>
  );
}
