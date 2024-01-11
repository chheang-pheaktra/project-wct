import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import {AuthContext} from '../Context/AuthContext'
import { db } from '../firebaseCofig';
const Resturant = () => {
    const [name,setName]=useState(' ');
    const [price,setPrice]=useState(' ');
    const [img,setImg]=useState('');
    const [editItemId, setEditItemId] = useState(null);
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
    const handleEdit=async (id)=>{
        setEditItemId(id);
        const itemToEdit=data.find((item)=>item.id===id);
        setName(itemToEdit.txtVal);
        setPrice(itemToEdit.txtPrice);
        setImg(itemToEdit.imgUrl)
    }
    const handSaveEdit=async ()=>{
        const docRef =doc(db,'CRUD',editItemId);
        await updateDoc(docRef,{
            txtVal:name,
            txtPrice:price,
            imgUrl:img
        });
        setEditItemId(null);
        getData();
        setName('');
        setPrice(' ');
        setImg(' ');
    }
    return (
        <section>
            <div class="flex flex-col justify-center items-center mt-5">
                    <img className="rounded-full w-64 h-64 object-fit"  src={currentUser?.photoURL} alt={currentUser.id}/>
                        <h1 class="text-4xl font-bold mb-4">{currentUser?.displayName}</h1>
                        <h4 class="text-2xl  mb-4">{currentUser?.email}</h4>
                    <div class="mb-5 text-center flex justify-center items-center space-x-4">
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
                        <button onClick={()=>handleEdit(result.id,result.imgUrl,result.txtVal,result.txtPrice)} class="h-8 px-3 mx-2 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-500 hover:text-white">Edit</button>
                        <button onClick={()=>handleDelete(result.id)} class="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-red-500 hover:text-white">Delete</button>
                    </div>
                </div>
                )
            }
            </div>
            {
                editItemId !==null&&(
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                    <div className="w-1/2 bg-white p-6 rounded-md  ">
                        <h1 className="text-center text-3xl font-medium">Edit Item</h1>
                      <div className="flex border mt-5 items-center rounded-l-md">
                           <div className="border py-4 px-5 bg-blue-600 text-white rounded-l-md ">
                           <label>Name:</label>
                           </div>
                           <div className="w-full">
                                <input className="outline-none w-full mx-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                           </div>
                      </div>
                        <div className="border mt-5 flex items-center rounded-l-md">
                        <div className="border py-4 px-6 bg-blue-600 text-white rounded-l-md">
                            <label>Price:</label>
                        </div>
                        <div className="w-full">
                            <input className="outline-none mx-2 w-full" type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                        </div>
                      <div className="border  mt-5 flex items-center rounded-l-md">
                        <div className="py-4 px-5 bg-blue-600 text-white rounded-l-md">
                            <label>Image:</label>
                        </div>
                        <div className="w-full">
                            <input className="w-full outline-none mx-2" type="text" value={img} onChange={(e) => setImg(e.target.value)} />
                        </div>
                      </div>
                     <div className=" ">
                        <button className="bg-blue-500 text-white px-6 py-2 mt-6 rounded-md" onClick={handSaveEdit}>Save</button>
                        <button className="bg-red-600 text-white px-6 py-2 mx-3 rounded-md" onClick={() => setEditItemId(null)}>Cancel</button>
                     </div>
                    </div>
                  </div>
                )
            }
        </section>
    );
}

export default Resturant;
