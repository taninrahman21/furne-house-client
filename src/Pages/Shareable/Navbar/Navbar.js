import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full  bg-red-400 text-white'>
      <nav className='flex justify-between items-center w-11/12 m-auto p-5 text-3xl'>
        <div>
          <Link to='/'>Furne House</Link>
        </div>

        {/* Start Links Here */}
        <div>
          <ul className='flex text-base'>
            <li className='pr-3'>
              <Link to='/home'>Home</Link>
            </li>
            <li className='pr-3'>
              <Link to='/shop'>Shop</Link>
            </li>
            <li className='pr-3'>
              <Link to='/product'>Product</Link>
            </li>
            <li className='pr-3'>
              <Link to='/contact-us'>Contact Us</Link>
            </li>
          </ul>
        </div>


        <div>
          Icons With Links
        </div>
      </nav>
    </div>
  );
};

export default Navbar;