import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <div className='w-11/12 m-auto'>

        <div className='border-b border-[#52667A] py-5 lg:py-10 flex lg:items-center justify-between flex-col lg:flex-row'>

          <div className='flex items-center'>
            <h3 className='text-white text-lg sm:text-xl md:text-2xl font-bold border-r border-[#52667A] md:pr-10 w-[45%] sm:w-fit'>Furne House</h3>
            <p className='text-[#F3F5F7] text-sm md:text-base pl-5 md:pl-10'>Design Your Personal Space Next Level</p>
          </div>

          <div className='flex mt-5 lg:mt-0 text-[#F3F5F7]'> 
            <ul className='flex flex-col md:flex-row text-base'>
              <li className='pb-5 md:pb-0 lg:pl-4'>
                <Link to='/home'>Home</Link>
              </li>
              <li className='pb-5 md:pb-0 md:pl-4'>
                <Link to='/shop'>Shop</Link>
              </li>
              <li className='pb-5 md:pb-0 md:pl-4'>
                <Link to='/about-us'>About Us</Link>
              </li>
              <li className='pb-5 md:pb-0 md:pl-4'>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className='flex flex-col md:flex-row gap-3 md:gap-0 justify-between py-4'>
          <div className='flex flex-col md:flex-row text-xs text-[#F3F5F7]'>
            <p className='pb-3 md:pb-0'>Copyright © 2023 Tanin Rahman. All rights reserved</p>
            <Link to='/home' className='md:pl-10 pb-3 md:pb-0'>Privacy Policy</Link>
            <Link to='/home' className='md:pl-10 pb-3 md:pb-0'>Terms of Use</Link>
          </div>
          <div className='text-white'>
            Social Links
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;