import React from 'react';
import banner from'../../../assets/banner.png'
const Banner = () => {
    return (
        <div className='bg-[#1313130D] md:flex items-center justify-evenly md:py-20 p-5 md:px-32'>
            {/* banner title */}
            <div className='md:w-1/2'>
                <h1 className='text-5xl font-semibold mb-10'>Books to freshen up your bookshelf</h1>
                <button className='bg-[#23BE0A] text-white font-medium px-3 py-2 rounded-lg'>View The List</button>
            </div>
            {/* banner image */}
            <div className='md:w-1/2'>
                <img className='md:w-72' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;