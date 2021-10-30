import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, } = service;

    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Link to = {`/details/${_id}`}> 
          <button>buy now </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
            
        </div>
    );
};

export default Service;