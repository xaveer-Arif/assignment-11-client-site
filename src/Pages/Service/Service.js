import axios from 'axios';
import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, img, discription, price } = service;
    const [orders, setOrders] = useState([])
    
    const addOrder = id => {
      
      // console.log(id)
      fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(services => {
        
        const singleService = services.find(service => service._id === id)
        axios.post('http://localhost:5000/serviceOrder', singleService)

        // console.log(singleService);
        // setOrders(singleService)
      })
    }
    console.log(orders)

    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col className = ''>
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
          <button onClick = {() => addOrder(_id)}>buy now </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  ))}
            
        </div>
    );
};

export default Service;