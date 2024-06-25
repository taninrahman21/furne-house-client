import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shareable/Footer/Footer';
import Navbar from '../Pages/Shareable/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;