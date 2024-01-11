
import React, { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { db, storage } from '../firebaseCofig';
import {addDoc,collection} from 'firebase/firestore';
import { v4 } from 'uuid';
import { AuthContext } from '../Context/AuthContext';
const Addfood = () => {
    const {currentUser}=useContext(AuthContext);
    console.log(currentUser)
    const [name,setName]=useState(' ');
    const [price,setPrice]=useState(' ');
    const [img,setImg]=useState('');
    const handleClick=(e)=>{
        const imgref=ref(storage,`files/${v4()}`)
        uploadBytes(imgref,e.target.files[0]).then(data=>{
            getDownloadURL(data.ref).then(val=>{
                setImg(val);
            })
        })
       
    }
    const handleUpload=async()=>{
        if(!currentUser){
            console.error('Current user not available');    
            return;
        }
        const userId=currentUser.uid;
        try{
            await addDoc(collection(db,"CRUD"),{txtVal:name,txtPrice:price,imgUrl:img,id:userId})
            alert("Added");

        }catch(error){
            console.error('Error adding document: ', error);
            alert('Error adding product. Please try again.');
        }
    }
    return (
        <section>
            <div className="min-h-screen bg-gray-50 flex flex-col py-12 sm:px-6 lg:px-8 px-6">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img className="mx-auto h-10 w-auto" src={logo} alt="Workflow"/>
                    <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Add The New Food
                    </h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form >
                            <div>
                                <label for="email" className="block text-sm font-medium leading-5  text-gray-700">Name</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input value={name} id="name" name="name" type="text" required=""  onChange={e=>setName(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Price</label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input value={price}  onChange={e=>setPrice(e.target.value)} id="price" name="price" type="text" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <label for="password" className="block text-sm font-medium leading-5 text-gray-700">Image</label>
                                <div class="mt-1 rounded-md shadow-sm">
                                    <input  onChange={(e)=>handleClick(e)} id="img" name="img" type="file" required="" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                                </div>
                            </div>
                            <div className="mt-6">
                                <span className="block w-full rounded-md shadow-sm">
                        <button type="button" onClick={handleUpload} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        Upload
                        </button>
                    </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </section>
    );
}

export default Addfood;
