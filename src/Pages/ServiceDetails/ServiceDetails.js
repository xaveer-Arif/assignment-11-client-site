import React, { useEffect, useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFIrebase from '../../Hooks/useFIrebase';

const ServiceDetails = () => {
    const {user} = useAuth({})
    const {id} = useParams()
    const [services, setServices] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const emailRef = useRef()

  
    


    useEffect(() => {
        fetch('https://bloodcurdling-vault-35095.herokuapp.com/services')
        .then(res => res.json())
        .then(products => { 
            if(products){
                // console.log(products)
            const service =  products.find(product => product._id?.includes(id))
            // console.log(service)
            setServices(service)
            }
            
            
            
            
        })
    },[services])
   /*  if(services){
            window.location.reload()

    } */
    // form submition
        let update = "pending"
        const formHandler = data =>{ 
            if(services){
                data.preventDefault()
            const email = emailRef.current.value;
            const newUser = {email, status: update}
        reset()
            fetch(`https://bloodcurdling-vault-35095.herokuapp.com/update/${services._id}`, {
                method : "PUT", 
                headers:{
                    "content-type": "application/json"
                }, 
                body:JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))
            console.log(data)
            }
        
        };

/*     console.log(user)
    console.log(services) */
    return (
        <div>
            
            <h1>product {services?.name}</h1>
            <Row>
                <Col >
                <Card>
        <Card.Img variant="top" className = '' src={services?.img} />
        <Card.Body>
          <Card.Title>{services?.name}</Card.Title>
          <Card.Text>
            {services?.discription}
          </Card.Text>
          <Card.Text>
            {services?.details}
          </Card.Text>
          {/* <p>Status : <span className = 'text-primary '>{status}</span></p> */}
          
        </Card.Body>
        <button className = 'btn btn-primary'>Details</button>
      </Card>
                </Col>

                <Col>
                <form onSubmit = {formHandler} className = 'mt-4'>
        <input  className = 'm-1 mb-2' defaultValue= {services?.name}/>
        <br />
        <input  className = 'm-1 mb-2' defaultValue= {services?.price}/>
        <br />

        <input  className = 'm-1 mb-2' defaultValue= {user?.displayName} />
        <br />

        <input  ref = {emailRef}  className = 'm-1 mb-2' defaultValue= {user?.email}/>
        <br />

        <input className = 'm-1 mb-2' required placeholder = 'address'/>
                  <br />
        <input className = 'm-1 mb-2' type = 'number' required placeholder = 'Phone'/>
                  <br />
        <input className = 'm-1 mb-2' type = 'checkbox w-100 ' required placeholder = 'discription'/>
                  <br />
        
        {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                <input className = 'm-2' type="submit" />
                
        </form>
                </Col>
            </Row>
     
  
        </div>
    );
};

export default ServiceDetails;