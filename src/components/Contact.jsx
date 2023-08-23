import React from 'react';
import {RiCustomerService2Fill} from "react-icons/ri";
import {MdOutlineTravelExplore} from "react-icons/md";

const Contact = () => {
    const openWhatsApp = () => {
        const phoneNumber = "7842500702";
        const message = "Hello, I need Customised Packages";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      };
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
        <div className='lg:col-span-2 flex flex-col justify-evenly'>
            <div>
                <h2> VACATIONS FOR SOLO, COUPLE AND GROUP PACKAGES!!! </h2>
                <p className='py-4'>we offer a various Vacations for Solo, Couple, Families and Group.
                   And also we offer a various one day and overnight treks and nature 
                   trails for Parent and Kids
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4'>
                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>Leading Services</h3>
                        <p className='px-4'>The Best Travel Company</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3 className='py-2'>Bookings</h3>
                        <p className='px-4'>The Best Travel Company</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='border text-center'>
            <p className='pt-2 lg:mt-10'>GET AN ADDITIONAL DISCOUNTS ON VACATIONS</p>
            <p className='py-4'>10% OFF</p>
            <p className=' bg-gray-800 text-gray-200 py-4 mb-2 lg:w-[300px] lg:ml-6 xl:ml-11 ' onClick={openWhatsApp}>BOOK NOW</p>
        </div>

    </div>
  )
}

export default Contact