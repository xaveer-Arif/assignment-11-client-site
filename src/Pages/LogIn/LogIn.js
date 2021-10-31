import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const {googleSignIn, user} = useAuth({})
    console.log(user)
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
            <button onClick = {() => handlerSingIn()} className = 'bg-warning mb-5'>Google Sign In</button>
        </div>
    );
};

export default LogIn;