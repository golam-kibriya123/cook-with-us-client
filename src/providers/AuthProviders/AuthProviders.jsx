import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProviders = ({ children }) => {
    const [spinner, setSpinner] = useState(true);
    const [users, setUsers] = useState(null);
    console.log(users)
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
            setSpinner(false)
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const authInfo = {
        users,
        spinner,
        createUsers,
        userLogin,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

};

export default AuthProviders;