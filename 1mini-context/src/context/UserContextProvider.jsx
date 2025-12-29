import React from "react";
import UserContext from "./context/UserContext";
import {useState} from "react"; 

const UserContextProvider=({children})=>{
    const [user,setUser]=useState(null);
    return (
    <UserContext.Provider values={{user,setUser}}>
        {children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;