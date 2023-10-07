import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../firabase/Firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState("");
    const [loading,setLoading] = useState(true);

    const auth = getAuth(app);

    // User register
    const handleRegister = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    // User Login
    const handleLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    
    // User logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Google Signin
    const provider = new GoogleAuthProvider();

    const handleGoogleSign = () => {
        signInWithPopup(auth,provider);
    }

    // Manage Users
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[auth])


    const contextInfo = {
         user,
         handleRegister,
         handleLogin,
         logout,
         loading,
         handleGoogleSign
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes= {
    children: PropTypes.node.isRequired
}

export default AuthProvider;