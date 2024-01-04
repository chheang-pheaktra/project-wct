import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { db } from '../firebaseStor';
const Resturant = () => {
    const [data,setData]=useState([]);
    const getData=async()=>{
        const dbref=collection(db,'CRUD');
        const dataDb=await getDocs(dbref);
        const allData=dataDb.docs.map(val=>({...val.data(),id:val.id}));
        setData(allData);
    }
    useEffect(()=>{
        getData();
    },[])
    console.log(data,'data')
    const handleDelete=async(id)=>{
        try{
            const docRef = doc(db,'CRUD',id);
            await deleteDoc(docRef);
            setData((prevData)=>prevData.filter((item)=>item.id!==id));
        }
        catch(err){
            alert('delete not sucessfully')
        }
    }
    return (
        <section>
            <div class="flex flex-col justify-center items-center ">
                    <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5" alt="Logo" class="object-cover w-40 h-40 mb-8 rounded-full"/>
                        <h1 class="text-4xl font-bold mb-4">PHEAKTRA RES</h1>
                        <p class="text-lg mb-8 px-4 md:px-0">We're working hard to bring you something awesome. Stay tuned!</p>
                    <div class="mb-5 flex justify-center items-center space-x-4">
                        <Link to="/Food" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">View Food</Link>
                        <Link to="/add" href="#" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Add Food</Link>
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
                    <div className="">
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
