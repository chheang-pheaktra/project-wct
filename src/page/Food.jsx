import React, { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { imageDb } from '../Config';
const Food = () => {
    let [imageurl,setImageurl]=useState([]);
    useEffect(()=>{
        listAll(ref(imageDb,"files"))
        .then(imgs=>{
            imgs.items.forEach(val=>{
                getDownloadURL(val)
                .then(url=>{
                    setImageurl(data=>[...data,url])
                })
            })
        })
        
    },[])
    return (
        <div className="flex flex-wrap justify-center">
            {
                imageurl.map(result=>
                   
                    <div class="flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-sm -z-40">
                        <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" transform='scle(1.5)'>
                            <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                            <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                        </svg>
                        <div class="relative pt-10 px-10 flex items-center justify-center">
                            <img class="relative w-40" src={result} alt="" />
                        </div>
                        <div class="relative text-black px-6 pb-6 mt-6">
                            <div class="flex justify-between">
                                <span class="block font-semibold text-xl">Peace Lily</span>
                                <span class=" bg-white rounded-full text-xs font-bold px-3 py-2 leading-none flex items-center">$36.00</span>
                            </div>
                        </div>
                    </div>   
              
                    
                    )
            }
        </div>
    );
}

export default Food;
