import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';


const ManageOrder = () => {
    const {user} = useAuth({})
    const [services, setServices] = useState([])
    const update = 'accepted';
    // const pending = 'pending'

    
    
    useEffect( () => {
        if(user.email){
        /*  fetch(`https://bloodcurdling-vault-35095.herokuapp.com/manage/${user.email}`) */
         fetch(`http://localhost:5000/manage/${user.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setServices(data)
        })
        }
      
    },[services])
  /*   const deleteHandler = id => {
        
                const remainingUsers = services.filter(user => user._id !== id)
                setServices(remainingUsers)
         
    } */
    const deleteHandler = id => {
        const url =  `http://localhost:5000/delete/${id}`
        fetch(url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.deletedCount > 0){
                alert('data deleted')
                const remainingUsers = services.filter(user => user._id !== id)
                setServices(remainingUsers)
            }
        })
    }
    // STATUS UPDATE
    // let update = 'accepted';
     const  newUser = {status:update}; 
    const updateStatus = id => {
        // console.log(id)
        fetch(`http://localhost:5000/statusUpdate/${id}`, {
            method: "PUT",
            headers : {
                "content-type": "application/json"
            },
            body:JSON.stringify(newUser)

        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h1>manage orders : {services.length}</h1>
            <Row xs={1} md={4} className="g-4">
            {
               services.map((service, index) => 
                // {Array.from({ length: 1 }).map((_, idx) => (
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
                          <p> email :<span className = 'text-danger '>{service.email}</span> </p>
                        </Card.Body>
                      </Card>
                      <button className = 'btn btn-danger w-50' onClick = {() => deleteHandler(service._id)}>Delete</button>

                      <button   onClick = {() => updateStatus(service._id)} className = 'btn btn-primary w-50'>Accept Order</button>
                    </Col>
                //   ))}
               )  
            }
            </Row>
            
        </div>
    );
};

export default ManageOrder;