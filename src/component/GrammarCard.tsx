import { Card } from "react-bootstrap";

export default function GrammarCard() {
  return (
    <Card className="opening-cards">
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
