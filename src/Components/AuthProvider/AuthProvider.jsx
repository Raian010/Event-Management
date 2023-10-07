import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../../firabase/Firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);

    const auth = getAuth(app);

    // User register
    const handleRegister = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    } 

    const contextInfo = {
         user,
         handleRegister,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;