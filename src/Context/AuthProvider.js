import React from 'react';
import { createContext } from "react";
import useFIrebase from '../Hooks/useFIrebase';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const allContext  = useFIrebase()
    return (
        <AuthContext.Provider value = {allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;