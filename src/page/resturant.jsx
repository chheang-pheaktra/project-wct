import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseStor';
import {AuthContext} from '../Context/AuthContext'
const Resturant = () => {
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser);
    const userID=currentUser.uid;
    const [data,setData]=useState([]);
    const getData=async()=>{
        const q=query(collection(db,'CRUD'),where('id','==',userID))
        const dataDb=await getDocs(q);
        const allData=dataDb.docs.map(val=>({...val.data(),id:val.id}));
        setData(allData);
    }
    useEffect(()=>{
        getData();
    },[])
    console.log(data,'data')
    const handleDelete=async(id)=>{
            const docRef = doc(db,'CRUD',id);
            await deleteDoc(docRef);
            setData((prevData)=>prevData.filter((item)=>item.id!==id));
    }
    const handlEdit=async(id)=>{

    }
    return (
        <section>
            <div class="flex flex-col justify-center items-center mt-5">
                    <img className="rounded-full w-64 h-64 object-fit"  src={currentUser?.photoURL} alt={currentUser.id}/>
                        <h1 class="text-4xl font-bold mb-4">{currentUser?.displayName}</h1>
                        <h4 class="text-2xl  mb-4">{currentUser?.email}</h4>
                    <div class="mb-5 flex justify-center items-center space-x-4">
                        <Link to="/Food" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Food</Link>
                        <Link to="/Order" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Order</Link>
                        <Link to="/Addfood" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Food</Link>
                        <Link to="/Qrcode" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">QR Code</Link>
                    </div>
            </div>
            <div class=" mx-auto lg:w-5/6"> 
            {
                data.map(result=>   
                <div class="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200 shadow-sm">
                    <div class="flex items-center">
                        <img class="rounded-full h-24 w-24" src={result?.imgUrl} alt="Food"/>
                        <div class="ml-6 flex flex-col">
                            <div class="leading-snug text-sm lg:text-lg text-gray-900 font-bold">{result.txtVal}</div>
                        </div>
                    </div>
                    <p>{result.txtPrice}</p>
                    <div className="flex">
                        <button class="h-8 px-3 mx-2 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-500 hover:text-white">Edit</button>
                        <button onClick={()=>handleDelete(result.id)} class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-red-500 hover:text-white">Delete</button>
                    </div>
                </div>
                )
            }
            </div>
        </section>
    );
}

export default Resturant;
