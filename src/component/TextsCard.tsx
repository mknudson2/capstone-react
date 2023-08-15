import { Card } from "react-bootstrap";

export default function TextsCard() {
  return (
    <Card className="opening-cards">
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
