import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useFIrebase from '../../Hooks/useFIrebase';
import Service from '../Service/Service';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrders = () => {
    const {user} = useFIrebase({})
    const [services, setServices] = useState([])
    useEffect(() =>{
    if(user.email){
        console.log(user)
     fetch(`https://bloodcurdling-vault-35095.herokuapp.com/orders/${user.email}`)
        .then(res => res.json())
            .then(data => {
                console.log(data)
                const order = data.filter(service => service.email === user.email)
                 setServices(order)
                 console.log(order)
            })
    }

       
    },[user])

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
            {
               services.map(service => <SingleOrder 
               key = {service._id}
               service = {service}
               ></SingleOrder> )
            }
            </Row>
        </div>
    );
};

export default MyOrders;