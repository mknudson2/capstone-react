import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function VoluspaCard() {
    const navigate = useNavigate();

    const handleCardClicked = () => {
      navigate("/voluspa");
    };
  
    return (
      <Card className="text-cards" onClick={handleCardClicked}>
        <div className="text-card-img-container">
          <Card.Img
            variant="top"
            src="/Voluspa.png"
            className="text-card-img"
          />
        </div>
        <Card.Title className="text-card-text">Vǫluspá</Card.Title>
      </Card>
    );
  }
  