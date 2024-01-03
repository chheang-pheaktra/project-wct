import React, { useEffect, useState } from 'react';
import {auth,app} from '../firebaseCofig';
import {onAuthStateChanged,signOut} from "firebase/auth"
import { Link } from 'react-router-dom';
const Auth = () => {
    const [authenticatedUser,setauthenticatedUser]=useState('');
    useEffect(()=>{
        const listenAuth =onAuthStateChanged(auth,(user)=>{
            if(user){
              setauthenticatedUser(user)
            }
            else{
                setauthenticatedUser(null);
            }
        })
        return ()=>{
            listenAuth();
        }
    },[])
    const userSignout=()=>{
        signOut(auth).then(()=>{
            console.log("signout");
        })
        .catch((err)=>console.log(err))
    }
    return (
    <>
        {
            authenticatedUser===null ? 
            <>
                <Link to="/login" class="px-4" >Login</Link>
                <Link to="/signup" class="px-4" >Signup</Link>  
            </>:
            <>
            <Link to="/" onClick={userSignout} class="px-4" >Log Out</Link>
            </>

        }
        
    </>
        
    );
}

export default Auth;
