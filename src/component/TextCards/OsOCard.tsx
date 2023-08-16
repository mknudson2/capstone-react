import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function OsOCard() {

    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/olafs-odds-saga")
    }

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/FaerOlaf.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Óláfs Saga Tryggvasonar</Card.Title>
    </Card>
  );
}
