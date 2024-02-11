import React from 'react'
import Card from 'react-bootstrap/Card'
import Tags from './Tags'
import './style.css'

const MyCard=({imageCard,titleCard,textCard,colorButton,textButton})=>{
  return (
    <Card className="card-container">
        <div className="card-content">
            <Card.Img variant="top" src={imageCard} className="card-img"/>
            <Card.Body>
            <Card.Title className='card-title'>{titleCard}</Card.Title>
            <Card.Text className="card-text">{textCard}</Card.Text>
            <Tags colorButton={colorButton} textButton={textButton}/>
            </Card.Body>
        </div>
    </Card>
  );
}

export default MyCard;