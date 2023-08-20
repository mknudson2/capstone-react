import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function TeachingAids() {
  
    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("")
    }
  
    return (
      <Card className="opening-cards" onClick={handleCardClicked}>
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src="/teaching-materials.jpeg"
            className="card-img"
          />
        </div>
        <Card.Title className="card-text">Teaching Aids</Card.Title>
      </Card>
    );
  }
