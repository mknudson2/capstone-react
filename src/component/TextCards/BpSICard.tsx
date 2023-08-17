import { Accordion, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BpSICard() {
  const Navigate = useNavigate();

  const handleCardClicked = () => {
    Navigate("/biskupa-saga-I");
  };

  return (
      <Card className="text-cards" onClick={handleCardClicked}>
        <div className="text-card-img-container">
          <Card.Img variant="top" src="/BpS-I.png" className="text-card-img" />
        </div>
        <Card.Title className="text-card-text">Biskupa sögur I</Card.Title>
      </Card>
  );
}
