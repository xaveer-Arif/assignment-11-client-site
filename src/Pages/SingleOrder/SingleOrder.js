import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleOrder = ({service}) => {
    const  {name, img, status} = service
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" className = '' src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p>Status : <span className = 'text-primary '>{status}</span></p>
        </Card.Body>
        <button>Delete</button>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default SingleOrder;