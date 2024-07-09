import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black py-10'>
      <div className='w-11/12 m-auto'>

        <div className='border-b border-[#52667A] py-5 flex justify-between'>
          <div className='border-r border-[#52667A] w-5/12'>
            <h3 className='text-white text-2xl font-bold'>Furne House</h3>
          </div>

          <div className='w-2/4 pl-5 text-[#F3F5F7] text-base'>
            <p>Design Your Personal Space Next Level</p>
          </div>

          <div className='w-full text-left flex justify-end text-[#F3F5F7]'>
            <ul className='flex text-base'>
              <li className='pl-4'>
                <Link to='/home'>Home</Link>
              </li>
              <li className='pl-4'>
                <Link to='/shop'>Shop</Link>
              </li>
              <li className='pl-4'>
                <Link to='/product'>Product</Link>
              </li>
              <li className='pl-4'>
                <Link to='/contact-us'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>


        <div className='flex justify-between py-4'>
          <div className='flex text-xs text-[#F3F5F7]'>
            <p>Copyright © 2023 Iconic. All rights reserved</p>
            <Link to='/home' className='pl-10'>Privacy Policy</Link>
            <Link to='/home' className='pl-10'>Terms of Use</Link>
          </div>
          <div>
            Social Links
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;