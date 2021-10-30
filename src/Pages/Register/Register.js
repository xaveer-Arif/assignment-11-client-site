import React from 'react';
import useFIrebase from '../../Hooks/useFIrebase';

const Register = () => {
    const {googleSignIn, user} = useFIrebase({})
    console.log(user)
    return (
        <div>
            <button onClick = {() => googleSignIn()} className = 'bg-warning'>Google Sign In</button>
        </div>
    );
};

export default Register;