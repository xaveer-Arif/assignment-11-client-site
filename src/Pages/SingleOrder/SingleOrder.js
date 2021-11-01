import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleOrder = ({service}) => {
  const [users, setUsers] = useState([]);
    setUsers(service)


    const deleteHandler = id => {
      const url =  `https://bloodcurdling-vault-35095.herokuapp.com/services/${id}`
      fetch(url, {
          method : 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          // console.log(data)
          if(data.deletedCount > 0){
              alert('data deleted')
              const remainingUsers = users.filter(user => user._id !== id)
              setUsers(remainingUsers)
          }
      })
  }
    return (
        <div>
            {Array.from({ length: 1 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" className = '' src={users.img} />
        <Card.Body>
          <Card.Title>{users.name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <p>Status : <span className = 'text-primary '>{users.status}</span></p>
        </Card.Body>
        <button onClick = {() => deleteHandler(users._id)}>Delete</button>
      </Card>
    </Col>
  ))}
        </div>
    );
};

export default SingleOrder;