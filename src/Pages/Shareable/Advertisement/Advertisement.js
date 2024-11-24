import React from 'react';
import Image1 from '../../../assets/advertisement.png';
import Image2 from '../../../assets/advertisement2.png';

const Advertisement = () => {
  return (
    <div className='py-10'>

      <div className='flex w-full'>
        <div className='w-2/4'>
          <img className='w-full' src={Image1} alt="" />
        </div>

        <div className='w-1/4 text-right px-14'>
          <h1 className='uppercase text-5xl text-black font-bold'>TURNTABLE COUCH</h1>
          <p className='text-base mt-5'>The archaic form of this table speaks for itself. It owes its unique identity to the feeling that it turns around its own axis.
            It is present in the room as a feature and fixed on its slim-line middle foot in solid wood.</p>
        </div>


        <div className='w-1/4'>
          <img className='h-full w-full' src={Image2} alt="" />
        </div>
      </div>

    </div>
  );
};

export default Advertisement;