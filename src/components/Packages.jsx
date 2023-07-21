import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {RiCloseCircleFill} from 'react-icons/ri';
import snowVideo from "../assets/snowVideo.mp4";
import Kedarnath from "../assets/Kedarnath.jpg";
import Aadrai from "../assets/Aadrai.jpg";
import Visapur from "../assets/Visapur.jpg";
import Munnar from "../assets/munnar.jpeg";
import HaveLock from "../assets/havelock.webp";
import Trek from "../assets/Trek.jpg";
import DudhSagar from "../assets/dudhsagar.jpg";
import DhanushKodi from "../assets/DhanushKodi.jpg";
import TajMahal from "../assets/Taj Mahal.jpeg";

const Packages = () => {
  const openWhatsApp = () => {
    const phoneNumber = "7674050702";
    const message = "Hello, I'm interested in booking the package.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const packages = [
    // {
    //   name: "Kedarnath",
    //   image: Kedarnath,
    //   price: 14999,
    //   ex: "ex-delhi",
    //   days: "4 Nigths/5 Days",
    //   OverView: [
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus.",
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus."
    //       ]
    // },
    {
      name: "Aadrai Jungle Trek",
      image: Aadrai,
      price: 3999,
      ex: "ex-Hyderabad, Vijayawada",
      days: "1 Nigth/2 Days",
      OverView: [
        "DAY 01 : Start from Hyderbad in the Night Overnight Journey to Pune by Semi Sleeper Bus or Train.",
        "DAY 02 : Start to the Trek base point by Bus and start trekking after Breakfast.",
        "Day 03 : Start to Pune and board the Hyderabad the Bus or Train. "
          ]
    },
    {
      name: "Kerala",
      image: Munnar,
      price: 19999,
      days: "4 Nights / 5 Days",
      ex: "ex: Hyd",
      OverView: [
        "DAY 01 : Start from Hyderabad Overnight Journey to Cochin by Train.",
        "DAY 02 : Reach Cochin and board Private Bus start to Munnar chek in Hotel and local sightseeing.",
        "DAY 03 : After Breakfast start for local sight seeing in Munnar and Visiting Athirepally Waterfalls. and check in Hotel.",
        "DAY 04 : Checkout Hotel and then Start to Alleppy and stay in Boat House for the Night",
        "DAY 05 : Start to Trivendrum (Temple) After darshan board Train to Hyderabad"
          ]
    },
    // {
    //   name: "Havelock",
    //   image: HaveLock,
    //   price: 7999,
    //   days: "3 Nights / 4 Days",
    //   ex: "ex: Mumbai",
    //   OverView: [
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus.",
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus."
    //       ]
    // },
    {
      name: "Visapur Trek",
      image: Visapur,
      price: 3999,
      days: "2 Night / 3 Days",
      ex: "ex: Hyd, Pune, Mumbai",
      OverView: [
        "1) Start from Hyderbad in the Night Overnight Journey to Pune by Semi Sleeper Bus or Train.",
        "2) Start to the Trek base point by Bus and start trekking after Breakfast and then back to room(Night Stay) .",
        "3) Checkout Room and start for Local Sight Seeing in Lonavala and back to Pune to Board Bus or Train to HYD"
          ]
    },
    {
      name: "Dudh-Sagar & Dandeli",
      image: DudhSagar,
      price: 6999,
      days: "2 Nights / 3 Days",
      ex: "ex: Hyd",
      OverView: [
        "DAY 01 : Start from Hyderbad in the Night Overnight Journey to Hubli by Semi Sleeper Bus or Train.",
        "DAY 02 : Start to the DudhSagar by Bus and after Dudhsagar Fall Start to Dandeli(Night Stay).",
        "Day 03 : Dandeli Activities(River Rafting, Zipline and other activities) after lunch back to Hubli to board to HYD. "
          ]
    },
    // {
    //   name: "Dhanushkodi",
    //   image: DhanushKodi,
    //   price: 4999,
    //   days: "2 Nights / 3 Days",
    //   ex: "ex: Chennai",
    //   OverView: [
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus.",
    //     "DAY 01 : Start from Delhi in the Night Overnight Journey to Haridwar by Semi Sleeper Bus."
    //       ]
    // },
    // {
    //   name: "Taj Mahal",
    //   image: TajMahal,
    //   price: 2999,
    //   days: "1 Day",
    //   ex: "ex: Delhi",
    //   description: "Description for Taj Mahal package goes here.",
    // },
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleClick = (pkg) => {
    setSelectedPackage(pkg);
  }

  const handleClose = (pkg) => {
    setSelectedPackage(null);
  }

  return (
    <div className="mt-20 md:mt-10 mx-3">
    <div className="md:bg-secondary-bg md:p-6 mt-4 text-gray-700 rounded-sm md:mx-5 mb-5">
      <div className="text-2xl font-bold p-2  text-center">Our Packages</div>
      <div className="text-center m-2 font-bold text-sm">
        Exclusive Packages with up to 10% off certain packages
      </div>
      <div className="grid gap-4 p-4 bg-white shadow rounded-sm">
        <div className="grid grid-cols-1 gap-4  md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-white border-1 shadow-sm hover:shadow-md rounded-md">
              <div>
                <img src={pkg.image} alt="" className="w-full h-[300px] object-cover rounded-t-md" />
              </div>
              <div className="grid gap-2 p-4">
                <div className="text-xl font-bold">{pkg.name}</div>
                <div className="text-md font-semibold">${pkg.price}</div>
                <div
                  className="text-sm text-primary-color w-fit font-bold hover:underline cursor-pointer"
                  onClick={() => handleClick(pkg)}
                >
                  See Package
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {selectedPackage && (
  <div className="fixed inset-0 justify-center items-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-md max-h-[80vh] overflow-y-auto">
      <div className="flex justify-end items-center mb-4">
        <button className="text-gray-600" onClick={handleClose}>
          <RiCloseCircleFill size={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
            src={selectedPackage.image}
            alt=""
            className="md:w-full md:h-[600px] object-cover rounded-md sm:w-[100px] sm:h-[100px]"
          />
        </div>
        <div className="p-1">
          <div className="text-xl font-bold p-2">{selectedPackage.name}</div>
          <div className="text-md font-semibold p-2">Price: ${selectedPackage.price}</div>
          <div className="text-md font-semibold p-2">Duration: {selectedPackage.days}</div>
          <div className="text-md font-semibold p-2">Departure: {selectedPackage.ex}</div>
          <div className="text-md font-semibold p-1">
            Overview:
            <ul>
              {selectedPackage.OverView.map((item) => (
                <li className="text-md font-semibold" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button 
              className="bg-gray-800/50 text-gray-200 py-2 ml-[100px] w-[150px] sm:w-[300px] sm:ml-[250px] md:ml-[160px] text-xl mt-4 border-slate-100 border p-2"
              onClick={openWhatsApp}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

  </div>
  );
};

export default Packages;


