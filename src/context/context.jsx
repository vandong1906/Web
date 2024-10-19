import {createContext,useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider =({children}) =>{
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const handlerUser = (userData) => {
        setUser(userData); 
        setLogin(!isLogin);
    };
    return (
        <AuthContext.Provider value={{isLogin, handlerUser,user }}>
            {children} 
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);