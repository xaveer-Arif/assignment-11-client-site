import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut   } from "firebase/auth";
import initAuthentication from '../Pages/Firebase/Firebase.init';

initAuthentication()
const useFIrebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth()
    const [isLoading, setIsloading] = useState([])

    const googleSignIn = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth , googleProvider)
       .finally(() => setIsloading(false))
       
    }
    // On Auth Change
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                    setUser(user)
            }
            setIsloading(false)
        })
    },[])
    // log out
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
        .then(() => {
            setUser({})
        })
        .finally(() => setIsloading(false))

    }

    return {
        googleSignIn,
        user,
        setUser,
        logOut,
        isLoading
    };
};

export default useFIrebase;