import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function FaerCard() {

    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/faer-saga")
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
      <Card.Title className="text-card-text">Færeyinga saga</Card.Title>
    </Card>
  );
}
