import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function SverrisCard() {

    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("/sverris-saga")
    }

  return (
    <Card className="text-cards" onClick={handleCardClicked}>
      <div className="text-card-img-container">
        <Card.Img
          variant="top"
          src="/SverrisSaga.png"
          className="text-card-img"
        />
      </div>
      <Card.Title className="text-card-text">Sverris saga</Card.Title>
    </Card>
  );
}
