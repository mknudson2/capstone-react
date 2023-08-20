import React from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function StudyPrograms() {

    const Navigate = useNavigate();

    const handleCardClicked = ()=>{
        Navigate("")
    }
  
    return (
      <Card className="opening-cards" onClick={handleCardClicked}>
        <div className="card-img-container">
          <Card.Img
            variant="top"
            src="/uw-campus.jpeg"
            className="card-img"
          />
        </div>
        <Card.Title className="card-text">Programs</Card.Title>
      </Card>
    );
  }