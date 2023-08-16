import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ResourcesCard() {

  const Navigate = useNavigate();

  const handleCardClicked = ()=>{
      Navigate("/resources")
  }


  return (
    <Card className="opening-cards" onClick={handleCardClicked}>
      <div className="card-img-container">
        <Card.Img
          variant="top"
          src="/aberdeen library.jpeg"
          className="card-img"
        />
      </div>

      <Card.Title className="card-text">Resources</Card.Title>
    </Card>
  );
}
