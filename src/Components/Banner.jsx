import React from 'react';
import banner from '../assets/banner.jpg';


function Banner() {
  return (
    <div className='w-full h-[20rem] relative'>
      
      <img src={banner} 
      className='w-full h-full' />

      <div className='absolute top-20 left-0 right-0 mx-auto w-[20rem]'>
        <div className='flex flex-col gap-4'>
          <div className='text-5xl font-semibold tect-white'>
            Crypto Tracker
          </div>
          <div className="font-semibold text-center text-white text-am">
            Get all info regarding cryptocurrencies
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default Banner;
