import React from 'react';
import { Link } from 'react-router-dom';
import useFIrebase from '../../Hooks/useFIrebase';

const Register = () => {
    const {googleSignIn, user} = useFIrebase({})
    console.log(user)
    return (
        <div>
            <h1 className = 'mt-5'>Sign In With Google</h1>
            <form>
                <input type="text" placeholder = 'name' />
                <br />
                <br />
                <input type="text" placeholder = 'email' />
                <br />
                <br />
                <input type="text" placeholder = 'address' />
                <br />
                <br />
            </form>
            <button onClick = {() => googleSignIn()} className = 'bg-warning mb-5 fw-bold'>Google Sign In</button>
            <p>Already Login? <Link to = "login" >Click Here
            </Link></p>
        </div>
    );
};

export default Register;