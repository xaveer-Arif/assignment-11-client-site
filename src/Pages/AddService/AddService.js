import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
      axios.post('https://bloodcurdling-vault-35095.herokuapp.com/services', data)
      .then(res => {
        if(res.data.insertedId){
            reset()
        }   
        // console.log(res)
      })
    //   console.log(data)
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                 <input className = 'm-1' {...register("name" , { required: true })}  placeholder = 'Service Name'/>
                 <br />
                  <input className = 'm-1' {...register("discription", { required: true })} placeholder = 'Service info'/>
                  <br />
                  <input className = 'm-1' {...register("img", { required: true })} placeholder = 'img url'/>
                  <br />
                  <input type = "number" className = 'm-1' {...register("price", { required: true })} placeholder = 'price'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                <input className = 'm-2' type="submit" />
    </form>
        </div>
    );
};

export default AddService;