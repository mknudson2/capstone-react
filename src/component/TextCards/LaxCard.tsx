import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function LaxCard() {

    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/lax-saga")
    }

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/LaxdaelaSaga.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Laxdœla Saga</Card.Title>
    </Card>
  );
}
