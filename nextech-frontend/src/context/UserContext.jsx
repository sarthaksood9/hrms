import { createContext, useState } from "react";

export const UserContext=createContext();

export const UserProvider =({children})=>{

    const [user,setUser]=useState(null);

    const logIn=(userData)=>{
        setUser(userData);
        localStorage.setItem('user',JSON.stringify(userData));
    }


    const logOut=(userData)=>{
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <UserContext.Provider value={{user,logIn,logOut}}>
            {children}
        </UserContext.Provider>
    )
}