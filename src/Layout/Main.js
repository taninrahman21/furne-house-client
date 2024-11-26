import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shareable/Footer/Footer';
import Navbar from '../Pages/Shareable/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-11/12 m-auto'>
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;