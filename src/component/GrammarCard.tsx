import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function GrammarCard() {

  const Navigate = useNavigate();

  const handleCardClicked = ()=>{
      Navigate("/grammar-case")
  }

  return (
    <Card className="opening-cards" onClick={handleCardClicked}>
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src="/Snorri-Sturluson.jpg"
          className="card-img"
        />
      </div>
      <Card.Title className="card-text">Grammar</Card.Title>
    </Card>
  );
}
