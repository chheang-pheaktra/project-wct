import React, { useEffect, useState } from 'react';
import { collection, doc, getDocs } from 'firebase/firestore';
import { txtDb } from '../firebaseStor';
const Food = () => {
    const [data,setData]=useState([]);
    const getData=async ()=>{
        const valRef =collection(txtDb,'txtDb');
        const dataDB=await getDocs(valRef);
        const allData=dataDB.docs.map(val=>({...doc.data(),id:doc.id}))
        setData(allData)
        console.log(dataDB);
    }
   useEffect(()=>{
    getData()
   },[])
    return (
        <div className="flex flex-wrap justify-center">
            {
                data.map(value=>
                   
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-md -z-40">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" transform='scle(1.5)'>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div class="relative pt-10 px-10 flex items-center justify-center">
                            <img class="relative w-40" src={value.imgUrl} alt="" />
                        </div>
                        <div class="relative text-black px-6 pb-6 mt-6">
                            <div class="flex justify-between">
                                <span class="block font-semibold text-xl">{value.txtVal}</span>
                                <span class=" bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">{value.txtPrice}</span>
                            </div>
                        </div>
                    </div>   
              
                    
                    )
            }
        </div>
    );
}

export default Food;
