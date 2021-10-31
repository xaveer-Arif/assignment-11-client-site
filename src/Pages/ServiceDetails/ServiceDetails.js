import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useFIrebase from '../../Hooks/useFIrebase';

const ServiceDetails = () => {
    const {user} = useFIrebase({})
    const {id} = useParams()
    const [services, setServices] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const emailRef = useRef()

  
    


    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(products => { 
            const service =  products.find(product => product._id === id)
            // console.log(service)
            setServices(service)
             
        })
    },[])
    // form submition
    const formHandler = data =>{ 
        data.preventDefault()
        const email = emailRef.current.value;
        const newUser = {email}
            //    console.log(newUser)
            //    console.log(data)
       
        fetch(`http://localhost:5000/update/${services._id}`, {
            method : "PUT", 
            headers:{
                "content-type": "application/json"
            }, 
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(data)
        /* axios.post('http://localhost:5000/services', data)
        .then(res => {
          if(res.data.insertedId){
              reset()
          }   
          // console.log(res)
        })
        console.log(data) */
      };
/*     console.log(user)
    console.log(services) */
    return (
        <div>
            <h1>product {services.name}</h1>
        {/* ..............form............... */}
    <form onSubmit = {formHandler}>
       {/*  <input  className = 'm-1' defaultValue= {services.name} placeholder = 'Service Name'/>
        <br /> */}

       {/*  <input  className = 'm-1' defaultValue= {user?.displayName} />
        <br /> */}

        <input  ref = {emailRef}  className = 'm-1' defaultValue= {user?.email}/>
        <br />

                {/*   <input className = 'm-1' required placeholder = 'address'/>
                  <br /> */}
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                    <br />
                <input className = 'm-2' type="submit" />
        </form>
       {/*  <form onSubmit={handleSubmit(onSubmit)}>

                 <input  className = 'm-1' {...register("name" , { required: false})} defaultValue= {services.name} placeholder = 'Service Name'/>
                 <br />

                 <input  className = 'm-1' {...register("userName" , {required: false })} defaultValue= {user?.displayName} />
                 <br />
                 <input  ref = {emailRef}  className = 'm-1' defaultValue= {user?.email} />
                 <br />
                 <input  ref = {register}  className = 'm-1' {...register("email" , {required: false })} defaultValue= {user?.email} />
                 <br />
                 <input  ref = {register}  className = 'm-1' {...register("email" , {required: false })} defaultValue= {user?.email} />
                 <br />

                  <input className = 'm-1' {...register("address", { required: true })} placeholder = 'address'/>
                  <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                <input className = 'm-2' type="submit" />
    </form> */}
  
        </div>
    );
};

export default ServiceDetails;