import React from 'react';
import ad21 from '../../../assets/ad21.png';
import ad22 from '../../../assets/ad22.png';
import ad23 from '../../../assets/ad23.png';

const Advertisement2 = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-10">
      {/* First section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* First text section */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black uppercase mb-5">
            Chairs & Benches
          </h1>
          <p className="text-sm text-black">
            The ensemble of the 1.3 Collection comprises{' '}
            <br className="hidden md:block" />
            chair, stool, and bar stool. The most{' '}
            <br className="hidden md:block" />
            outstanding feature of this delicate design.
          </p>
        </div>

        {/* First image */}
        <div>
          <img
            src={ad21}
            alt="Chair and Benches"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Second image */}
        <div className="order-last md:order-none">
          <img
            src={ad22}
            alt="Chair and Benches"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Second text section */}
        <div className="order-3 md:order-none md:p-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black uppercase mb-5">
            Ad Mire
          </h1>
          <p className="text-sm text-black">
            AD MIRE – the adjustable table mirror. This{' '}
            <br className="hidden md:block" />
            compact vanity mirror turns any table or{' '}
            <br className="hidden md:block" />
            console into a dressing table. The base is{' '}
            <br className="hidden md:block" />
            made from solid timber and holds the mirror{' '}
            <br className="hidden md:block" />
            in place.
          </p>
        </div>
      </div>

      {/* Second section */}
      <div>
        <img
          src={ad23}
          alt="Chair and Benches"
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Advertisement2;
