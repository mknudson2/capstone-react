import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BpSIIICard() {
    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/biskupa-saga-III")
    }

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/BpS-III.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Biskupa sögur III</Card.Title>
    </Card>
  );
}