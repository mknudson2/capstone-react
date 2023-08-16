import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BpSIICard() {
    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/biskupa-saga-II")
    }

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/BpS-II.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Biskupa sögur II</Card.Title>
    </Card>
  );
}