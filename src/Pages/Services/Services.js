import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services)
    return (
        <div>
            <h1>Services {services.length}</h1>
            <Row xs={1} md={4} className="g-4">
            {
                services.map(service => <Service
                key = {service._id}
                service = {service}
                ></Service>)
            
            }
            </Row>
        </div>
    );
};

export default Services;