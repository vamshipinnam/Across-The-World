import React from 'react';
import snowVideo from "../assets/snowVideo.mp4";
import Kedarnath from "../assets/Kedarnath.jpg";
import Munnar from "../assets/munnar.jpeg";
import HaveLock from "../assets/havelock.webp";
import Trek from "../assets/Trek.jpg";
import DudhSagar from "../assets/dudhsagar.jpg";
import DhanushKodi from "../assets/DhanushKodi.jpg"
import TajMahal from "../assets/Taj Mahal.jpeg"


const Deestinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Stays </h1>
        <p>On the India Best Places </p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <video className='w-full h-full object-cover col-span-3 md:col-span-2 row-span-2' 
                src={snowVideo} autoPlay 
                loop 
                muted  />
            
            <img className='w-full h-full object-cover' src={Trek} alt="/" />
            <img className='w-full h-full object-cover' src={DhanushKodi} alt="/" />
            <img className='w-full h-full object-cover' src={DudhSagar} alt="/" />
            <img className='w-full h-full object-cover' src={Kedarnath} alt="/" />
            <img className='w-full h-full object-cover' src={Munnar} alt="/" />
            <img className='w-full h-full object-cover' src={TajMahal} alt="/" />
        </div>
    </div>
  )
}

export default Deestinations