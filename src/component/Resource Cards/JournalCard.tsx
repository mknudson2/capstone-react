import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export default function JournalCard() {
 
    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("")
    }
  
    return (
      <Card className="opening-cards" onClick={handleCardClicked}>
        <div className="card-img-container journal-img">
          <Card.Img
            variant="top"
            src="/specculum.jpeg"
            className="card-img journal-img"
          />
        </div>
        <Card.Title className="card-text">Journals</Card.Title>
      </Card>
    );
  }
