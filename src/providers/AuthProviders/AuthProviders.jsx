import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import Sppiner from '../../components/Spinner/Sppiner';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [spinner, setSpinner] = useState(true);
    const [users, setUsers] = useState(null);
    const createUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth)
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUsers(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    // Load all Data


    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://cook-with-us-server-golam-kibriya123.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
        setSpinner(false)
    }, []);
    const authInfo = {
        users,
        spinner,
        createUsers,
        userLogin,
        logOut,
        chefs
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProviders;