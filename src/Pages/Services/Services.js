import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
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
        <div className = 'mt-5 mb-5'>
            <h1 className = 'mb-5'>Services</h1>
            {
                 
                    services.length === 0 ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> : 
                  <Row xs={1} md={3} className="g-1">
                  {
                      services.map(service => <Service
                      key = {service._id}
                      service = {service}
                      ></Service>)
                  
                  }
                  </Row>
            }
            
        </div>
    );
};

export default Services;