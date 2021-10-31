import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('https://bloodcurdling-vault-35095.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services)
    return (
        <div className = 'mt-5 mb-5'>
            <h1 className = 'mb-5'>Services {services.length}</h1>
            <Row xs={1} md={3} className="g-0">
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