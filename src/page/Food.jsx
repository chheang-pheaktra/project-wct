import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';
import { db } from '../firebaseStor';
import { useParams } from 'react-router-dom';
const Food = () => {
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser);
    const userID=currentUser.uid;
    console.log(userID);
    const [data,setData]=useState([]);
    const handleAddToOrder=()=>{

    }
    const getData = async () =>{
        const q=query(collection(db,'CRUD'),where('id','==',userID))
        const dataDb = await getDocs(q)

        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
    }

    useEffect(()=>{
        getData();
    },[currentUser])
    console.log(data,'data');
    return (
        <div>
           <h1 className="text-2xl text-center font-bold mt-3">Enjoy Your Order</h1>
            <div className="flex flex-wrap justify-center">
            {
                data.map(results=> 
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md -z-40">
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
                        <div onClick={handleAddToOrder} className="bg-blue-500 p-2 ">
                            <p className="text-center font-medium text-white">Order</p>
                        </div>
                    </div>   
              
                    )
            }
            </div>
        </div>
    );
}

export default Food;
