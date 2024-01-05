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
                <div className="bg-blue-600 p-2 text-white rounded-md">
                    <Link to="/login" class="px-4" >Login</Link>
                </div>
            </>:
            <>
           <div className="bg-red-600 p-2 text-white rounded-md">
                <Link to="/" onClick={userSignout} class="px-4" >Logout</Link>
           </div>
            </>

        }
        
    </>
        
    );
}

export default Auth;
