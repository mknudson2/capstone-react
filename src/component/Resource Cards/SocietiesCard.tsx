import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function SocietiesCard() {
  
    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("")
    }
  
    return (
      <Card className="opening-cards" onClick={handleCardClicked}>
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src="/SASS_logo_full-RGB-large.webp"
            className="card-img societies-card"
          />
        </div>
        <Card.Title className="card-text">Societies</Card.Title>
      </Card>
    );
  }
