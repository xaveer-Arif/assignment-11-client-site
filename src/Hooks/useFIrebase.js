import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut   } from "firebase/auth";
import initAuthentication from '../Pages/Firebase/Firebase.init';

initAuthentication()
const useFIrebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()

    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth , googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user)
        })
    }
    // On Auth Change
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                    setUser(user)
            }
        })
    },[])
    // log out
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })

    }

    return {
        googleSignIn,
        user,
        logOut
    };
};

export default useFIrebase;