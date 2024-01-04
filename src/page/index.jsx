import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../assets/pic1.gif'
import Authpage from '../components/Authpage';
const index = () => {
    return (
        <div>
          <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div className="pr-2 md:mb-14 py-14 md:py-0">
            <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span class="block w-full animate-typing overflow-hidden whitespace-nowrap">Welcome Our Website</span> For Your business!</h1>
            <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
              Empowering you to make better financial decisions, We truly are professional money planners...
            </p>
            <div class="mt-4">
             <Authpage/>
            </div>
          </div>
          <div class="pb-10 overflow-hidden -z-10 md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" className=" transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src={HomeImg} alt="Awesome hero page image" width="500" height="488"/>
          </div>
            </div>
        </div>
    );
}

export default index;
