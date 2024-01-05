import { createContext,useEffect,useState } from "react";
import {auth} from "../firebaseCofig"
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext =createContext()
export const AuthContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState({})
    useEffect(()=>{
       const consub=onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            console.log(user);
        });

        return ()=>{
            consub();
        }
    },[]);
    return (
        <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
    
}