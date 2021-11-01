import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import useFIrebase from '../../Hooks/useFIrebase';

const Register = () => {
    const {googleSignIn, user} = useAuth({})
    const location = useLocation();
    const history = useHistory()

    const redirect_url = location.state?.from || '/home'

    const handlerSingIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_url)
        })
        .catch(error => {
            
        })

    }
    return (
        <div>
            <h1 className = 'mt-5'>Register With Google</h1>
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
            {/* <button onClick = {() => googleSignIn()} className = 'bg-warning mb-5 fw-bold'>Google Sign In</button> */}
            {/*  */}
            <button onClick = {() => handlerSingIn()} className = 'bg-warning mb-5 fw-bold'>Google Sign In</button>
         
            {/*  */}

            <p>Already Login? <Link to = "login" >Click Here
            </Link></p>
        </div>
    );
};

export default Register;