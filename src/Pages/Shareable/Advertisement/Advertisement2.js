import React from 'react';
import ad21 from '../../../assets/ad21.png';
import ad22 from '../../../assets/ad22.png';
import ad23 from '../../../assets/ad23.png';

const Advertisement2 = () => {
  return (
    <div className='grid grid-cols-2 gap-5 py-10'>

      <div className='col-span-2 lg:col-span-1 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {/* this is first div */}
        <div>
          <h1 className='text-3xl lg:text-5xl font-bold text-black uppercase mb-5 md:mb-6 lg:mb-8 mt-2'>Chairs & Benches</h1>
          <p className='text-sm text-black'>The ensemble of the 1.3 Collection comprises <br className='hidden md:block' /> chair, stool and bar stool. The most <br className='hidden md:block' /> outstanding feature of this delicate.</p>
        </div>

        <div>
          <img src={ad21} alt="Chair and Benches" />
        </div>

        <div className="order-last lg:order-none">
          <img src={ad22} alt="Chair and Benches" />
        </div>

        <div className="order-3 lg:order-none lg:p-6">
          <h1 className='text-3xl lg:text-5xl font-bold text-black uppercase mb-5 md:mb-6 lg:mb-8 mt-2'>AD MIRE</h1>
          <p className='text-sm text-black'>AD MIRE – the adjustable table mirror. This <br className='hidden md:block' /> compact vanity mirror turns any table or <br className='hidden md:block' /> console into a dressing table. The base is <br className='hidden md:block' /> made from solid timber and holds the mirror <br className='hidden md:block' /> in place.</p>
        </div>

      </div>

      {/* This is second div */}
      <div className='col-span-2 md:col-span-1'>
        <img src={ad23} alt="Chair and Benches" />
      </div>
    </div>
  );
};

export default Advertisement2;