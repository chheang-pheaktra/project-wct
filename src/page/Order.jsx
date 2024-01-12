import React, { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { collection, deleteDoc, doc, getDocs,  orderBy,  query, where } from 'firebase/firestore';
import { db } from '../firebaseCofig';

const Order = () => {
    const {currentUser}=useContext(AuthContext);
    const userID=currentUser ? currentUser.uid: null;   
    const [order,setOrder]=useState([]);
    const getOrder=async()=>{
       if(userID){
        const q=query(collection(db,"Cart"),where('userId','==',userID))
        const dataDb=await getDocs(q);
        const allData=dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setOrder(allData)
       }
       else{
        const q=query(collection(db,"Cart"))
        const dataDb=await getDocs(q);
        const allData=dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setOrder(allData)
       }
    }
    const handleDelete=async(id)=>{
        const docRef = doc(db,'Cart',id);
        await deleteDoc(docRef);
        setOrder((prevData)=>prevData.filter((item)=>item.id!==id));
}
    useEffect(()=>{
        getOrder(); 
    },currentUser)
    console.log(order,'order');
    return (
        <div className="flex text-center" >
                <div className="w-3/5">
                    <h1 className="text-2xl text-center font-bold mt-3">Inventory</h1>
                    <div className="flex flex-wrap justify-center">
                    {
                        order.map(results=> 
                            <div key={results.id}>
                                <div  class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md -z-40">
                                <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" transform='scle(1.5)'>
                                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                                </svg>
                                <div class="relative pt-10 px-10 flex items-center justify-center">
                                    <img class="relative w-40 " src={results.item.imgUrl}/>
                                </div>
                                <div class="relative text-black px-6 pb-6 mt-6">
                                    <div class="flex justify-between">
                                        <span class="block font-semibold text-xl">{results.item.txtVal}</span>
                                        <span class=" bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">{results.item.txtPrice}</span>
                                    </div>
                                </div>
                                </div>  
                            </div> 
                    
                            )
                    }
                    </div>
                </div>
                <div className="text-center w-2/5 ">
                    <h1 className="text-center text-2xl font-bold">
                        Order
                    </h1>
                    <div className="w-full py-5">
                        <table className="w-full ">
                            <thead className="">
                                <tr className="">
                                    <th>Number</th>
                                    <th>Name</th>
                                    <th>Food</th>
                                    <th>Qty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className="py-5 mt-5" >
                                {
                                  order.map(res=>
                                    <tr className="shadow-md mt-5">
                                    <td>{res.orderInfo.Number}</td>
                                    <td>{res.orderInfo.name}</td>
                                    <td>{res.item.txtVal}</td>
                                    <td>{res.orderInfo.quantity}</td>
                                    <td>
                                        <div className="bg-red-600  text-white mx-auto mt-3 mb-3  w-1/2 text-center">
                                            <button onClick={()=>handleDelete(res.id)} className="py-3 px-2">Delete</button>
                                        </div>
                                    </td>
                                </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    );
}

export default Order;
