import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full  bg-white text-white'>
      <nav className='flex justify-between items-center w-11/12 m-auto p-5 text-3xl'>
        <div>
          <Link to='/' className='font-bold text-3xl text-black'>Furne House</Link>
        </div>

        {/* Start Links Here */}
        <div>
          <ul className='flex text-base text-[#9DADBE]'>
            <li className='pr-8'>
              <NavLink to='/home' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Home</NavLink>
            </li>
            <li className='pr-8'>
              <NavLink to='/shop' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Shop</NavLink>
            </li>
            <li className='pr-8'>
              <NavLink to='/product' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Product</NavLink>
            </li>
            <li className=''>
              <NavLink to='/contact-us' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Contact Us</NavLink>
            </li>
          </ul>
        </div>


        <div className='text-black'>
          Icons With Links
        </div>
      </nav>
    </div>
  );
};

export default Navbar;