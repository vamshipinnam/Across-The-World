import React from "react";
import beachVideo from "../assets/beachVideo.mp4";
import beach from "../assets/beach.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const MainPage = () => {const openWhatsApp = () => {
    const phoneNumber = "7842500702";
    const message = "Hello, I'm interested in booking the package.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
    return (
        <div className="w-full h-screen relative">
            <video 
                className="w-full h-full object-cover" 
                src={beach} 
                autoPlay 
                loop 
                muted 
            />
            <div className="absolute w-full h-full top-0 left-0">
                <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center">
                    <div>
                        <h2 className="text-[24px] sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif mt-[200px]">Journey to All World's </h2>
                        <h2 className="text-[24px] sm:text-5xl md:text-6xl lg:text-7xl ml-[170px] text-white font-serif sm:ml-[340px] md:ml-[420px] lg:ml-[510px]">Corner's</h2>
                        <p className="text-[12px]  sm:text-xl text-white mt-2 ml-[80px] sm:ml-[230px] md:ml-[365px] lg:ml-[500px]">Unlock the wonders of the World.</p>
                        <p className="text-[12px]  sm:text-xl text-white mt-1 ml-[100px] sm:ml-[250px] md:ml-[390px] lg:ml-[520px]"> Your personalized Dream Trip</p>
                        <button 
                            className=' bg-gray-800/50 text-gray-200 py-2 ml-[100px] w-[150px] sm:w-[300px] sm:ml-[250px] md:ml-[360px] lg:ml-[500px] xl:ml-[500px] text-xl mt-4 border-slate-100 border p-2'
                            onClick={openWhatsApp}
                        >
                            Book A Trip
                        </button>
                    </div>
                    {/* <form className="flex justify-between items-center w-[300px] sm:w-[600px] mx-auto  border p-1
                    rounded-md text-black bg-white">
                        <div>
                            <input className="bg-transparent w-[200px] sm:w-[400px] focus:outline-none" 
                            type="text" placeholder="Search Destinations" />
                        </div>
                        <div>
                            <button><AiOutlineSearch size={20} className="icon" style={{color: "#fff"}}/></button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    )
}

export default MainPage;