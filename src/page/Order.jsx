import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseCofig';

const Order = () => {
    const {currentUser}=useContext(AuthContext);
    const userID=currentUser.uid;
    const [data,setData]=useState([]);
    const getData=async ()=>{
        const q=query(collection(db,'CRUD'),where('id','==',userID))
        const dataDb=await getDocs(q);
        const allData=dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData);
    }
    useEffect(()=>{
        getData();
    },[currentUser])
    return (
        <div className="flex text-center" >
                <div className="w-3/5">
                    <h1 className="text-2xl text-center font-bold mt-3">Inventory</h1>
                    <div className="flex flex-wrap justify-center">
                    {
                        data.map(results=> 
                            <div key={results.id}>
                                <div  class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md -z-40">
                                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" transform='scle(1.5)'>
                                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                                </svg>
                                <div class="relative pt-10 px-10 flex items-center justify-center">
                                    <img class="relative w-40 " src={results.imgUrl}/>
                                </div>
                                <div class="relative text-black px-6 pb-6 mt-6">
                                    <div class="flex justify-between">
                                        <span class="block font-semibold text-xl">{results.txtVal}</span>
                                        <span class=" bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">{results.txtPrice}</span>
                                    </div>
                                </div>
                                </div>  
                            </div> 
                    
                            )
                    }
                    </div>
                </div>
                <div className="text-center w-2/5">
                    <h1 className="text-center text-2xl font-bold">
                        Order
                    </h1>
                </div>
        </div>
    );
}

export default Order;
