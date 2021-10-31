import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, discription, price } = service;

    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body className = 'bg-danger text-white'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {discription}
          </Card.Text>
          <Card.Text>
          price : {price}
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