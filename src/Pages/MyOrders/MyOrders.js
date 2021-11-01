import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const MyOrders = () => {
    const {user} = useAuth({})
    const [services, setServices] = useState([])
    useEffect(() =>{
    if(user.email){
     fetch(`https://bloodcurdling-vault-35095.herokuapp.com/serviceOrder/${user.email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                const order = data.filter(service => service.email === user.email)
                 setServices(order)
            })
    }
    },[user])
    // delete handler
    const deleteHandler = id => {
        const url =  `https://bloodcurdling-vault-35095.herokuapp.com/delete/${id}`
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('data deleted')
                const remainingUsers = services.filter(user => user._id !== id)
                setServices(remainingUsers)
            }
        })
    }
    return (
        <div>
          <h1>Your Orders</h1>
            <Row xs={1} md={4} className="g-4 m-3">
            {
               services.map((service, index) => 
                    <Col>
                      <Card>
                        <Card.Img variant="top" className = '' src={service.img} />
                        <Card.Body>
                          <Card.Title>{service.name}</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                          </Card.Text>
                          <p>Status : <span className = 'text-primary '>{service.status}</span></p>
                        </Card.Body>
                        <button className = 'btn btn-danger' onClick = {() => deleteHandler(service._id)}>Delete</button>
                      </Card>
                    </Col>
                
               )  
            }
            </Row>
        </div>
    );
};

export default MyOrders;