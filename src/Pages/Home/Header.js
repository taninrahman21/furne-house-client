import React from 'react';
import headerImg from '../../assets/banner.png';

const Header = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center py-4">
      <div className="lg:w-1/2 flex flex-col items-start py-6">
        <h2 className="font-bold uppercase text-5xl lg:text-6xl leading-none mb-8">Masterpieces <br /> Crafted From <span className='text-[#38CB89]'>Solid <br className='hidden lg:block'/> Wood</span> </h2>
        <p className="text-black text-base md:text-xl mb-8">
          Since 1990, Iconic has been producing ecological furniture. We stand for a modern, minimalist design vocabulary and a sustainable approach to design.
        </p>
        <button className="w-full md:w-fit bg-black uppercase text-white py-2 px-10 rounded cursor-pointer">
          Order custom design
        </button>
      </div>

      <div className="w-full lg:w-1/2 md:mb-0">
        <img src={headerImg} alt="banner" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Header;