import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
      axios.post('https://bloodcurdling-vault-35095.herokuapp.com/services', data)
      .then(res => {
        if(res.data.insertedId){
          window.confirm('Are you sure to create a service')
            reset()
        }   
      })
    };
    return (
        <div>
          <h1>Create New Services</h1>
          <p>It will be shown in the home page</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <input className = 'm-2' {...register("name" , { required: true })}  placeholder = 'Service Name'/>
                 <br />
                 <input className = 'm-2' {...register("details" , { required: true })}  placeholder = 'Service details'/>
                 <br />
                 <input className = 'm-2' {...register("location" , { required: true })}  placeholder = 'Service location'/>
                 <br />
                  <input className = 'm-2' {...register("discription", { required: true })} placeholder = 'Service info'/>
                  <br />
                  <input className = 'm-2' {...register("img", { required: true })} placeholder = 'img url'/>
                  <br />
                  <input type = "number" className = 'm-2' {...register("price", { required: true })} placeholder = 'price'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <button className = 'btn btn-danger  mb-3 '>Add Service</button>
                {/* <input className =  'btn btn-danger' className = 'm-2' type="submit" /> */}
    </form>
        </div>
    );
};

export default AddService;