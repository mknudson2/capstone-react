import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TextsCard() {

  const Navigate = useNavigate();

  const handleCardClicked = ()=>{
      Navigate("/laxdoela-ch1")
  }

  return (
    <Card className="opening-cards" onClick={handleCardClicked}>
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src="/icelandic_sagas.webp"
          className="card-img"
        />
      </div>
      <Card.Title className="card-text">Texts</Card.Title>
    </Card>
  );
}
