import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseCofig';

const Authpage = () => {
    const [authpage,setauthpage]=useState('');
    useEffect(()=>{
        const listenauth=onAuthStateChanged(auth,(user)=>{
            if(user){
                setauthpage(user)
            }
            else{
                setauthpage(null);
            }
        })
        return ()=>{
            listenauth();
        }
    },[])
    return (
       <>
            {
                authpage===null ?
                <>
                     <Link to="/login" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-600 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Start Now</span> </Link>
                </>:
                <>
                 <Link to="/resturant" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-600 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Start Now</span> </Link>
                </>
            }
       </>
       
    );
}

export default Authpage;
