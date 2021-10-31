import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useFIrebase from '../../Hooks/useFIrebase';
import DisplayAllOrder from './DisplayAllOrder/DisplayAllOrder';

const ManageOrder = () => {
    const {user} = useAuth({})
    const [services, setServices] = useState([])
    
    
    useEffect( () => {
        if(user.email){
         fetch(`http://localhost:5000/manage/${user.email}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            // console.log(data)
        })
        }
      
    },[user])
    return (
        <div>
            <h1>manage orders : {services.length}</h1>
            <Row xs={1} md={4} className="g-4">
                {
                    services.map(service => <DisplayAllOrder 
                    key = {service._id}
                    service = {service}
                    ></DisplayAllOrder>)
                }
            </Row>
            
        </div>
    );
};

export default ManageOrder;