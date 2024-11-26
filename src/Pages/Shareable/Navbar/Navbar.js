import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white text-white">
      <nav className="flex justify-between items-center w-11/12 m-auto py-5 text-3xl">
        {/* Brand and Hamburger */}
        <div className="flex items-center">
          <button
            className="md:hidden text-black text-2xl mr-3 mt-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
          <Link to="/" className="font-bold text-2xl md:text-3xl text-black">Furne House</Link>
        </div>

        {/* Nav Links */}
        <div className='hidden md:block'>
          <ul className='flex text-base text-[#9DADBE]'>
            <li className='pr-8'>
              <NavLink to='/home' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Home</NavLink>
            </li>
            <li className='pr-8'>
              <NavLink to='/shop' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Shop</NavLink>
            </li>
            <li className='pr-8'>
              <NavLink to='/blog' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Blog</NavLink>
            </li>
            <li className='pr-8'>
              <NavLink to='/about-us' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>About Us</NavLink>
            </li>
            <li className=''>
              <NavLink to='/contact-us' className={({ isActive }) => isActive ? 'text-black font-semibold' : ''}>Contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}

        <div className={`fixed inset-0 bg-white z-50 flex flex-col p-5 transform ${isMenuOpen ? "translate-x-0 animate-slideDown" : "-translate-x-full"} transition-transform duration-300`}
        >
          {/* Brand Name and Close Icon */}
          <div className="flex justify-between items-center mb-5">
            <Link to="/" className="font-bold text-2xl text-black">
              Furne House
            </Link>
            <button
              className="text-black text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-3 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 pl-12 py-2 text-base border border-gray-300 rounded-lg text-black focus:outline-none"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-black">
              <CiSearch />
            </span>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col text-base text-[#9DADBE]">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full p-3 text-black font-semibold bg-gray-100 border-b border-black"
                    : "block w-full py-3 border-b border-gray-100"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full p-3 text-black font-semibold bg-gray-100 border-b border-black"
                    : "block w-full py-3 border-b border-gray-100"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full p-3 text-black font-semibold bg-gray-100 border-b border-black"
                    : "block w-full py-3 border-b border-gray-100"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "block w-full p-3 text-black font-semibold bg-gray-100 border-b border-black"
                    : "block w-full py-3 border-b border-gray-100"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Sign Up Button */}
          <div className="mt-auto">
            <NavLink
              to="/sign-up"
              className="block bg-black text-xl uppercase text-white py-2 px-10 rounded text-center cursor-pointer"
            >
              Sign Up
            </NavLink>
          </div>
        </div>

        {/* Heart and Shopping Cart */}
        <div className="text-black flex gap-2">
          <NavLink to="#" className={({ isActive }) => isActive ? "text-black font-semibold" : ""}>
            <CiHeart />
          </NavLink>
          <NavLink to="#" className={({ isActive }) => isActive ? "text-black font-semibold" : ""}>
            <CiShoppingCart />
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
