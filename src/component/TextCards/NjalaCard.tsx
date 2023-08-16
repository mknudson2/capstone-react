import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NjalaCard() {
  const Navigate = useNavigate();

  const handleCardClicked = () => {
    Navigate("/njals-saga");
  };

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/Njala.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Brennu-Njáls saga</Card.Title>
    </Card>
  );
}
