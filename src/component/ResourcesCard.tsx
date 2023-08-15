import { Card } from "react-bootstrap";

export default function ResourcesCard() {
  return (
    <Card className="opening-cards">
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
