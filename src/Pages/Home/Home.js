import React from 'react';
import Novelties from '../Novelties/Novelties';
import Advertisement from '../Shareable/Advertisement/Advertisement';
import Advertisement2 from '../Shareable/Advertisement/Advertisement2';
import NewLetter from '../Shareable/NewsLetter/NewLetter';
import Header from './Header';

const Home = () => {
  return (
    <div className='w-11/12 m-auto'>
      <Header />
      <Novelties />
      <Advertisement2 />
      <Advertisement />
      <NewLetter />
    </div>
  );
};

export default Home;