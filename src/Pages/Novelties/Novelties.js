import React from 'react';
import no1 from '../../assets/no1.png';
import no2 from '../../assets/no2.png';
import no3 from '../../assets/no3.png';
import no4 from '../../assets/no4.png';


const Novelties = () => {
  const noveltiesProducts = [
    {
      name: "BOND - round",
      image: no1,
      designBy: "Design by Merit Frank, Nana Gröner, 2010"
    },
    {
      name: "1.3 Chair",
      image: no2,
      designBy: "Design by Kihyun Kim, 2012"
    },
    {
      name: "Kuyu Desk",
      image: no3,
      designBy: "Design by Formstelle, 2023"
    },
    {
      name: "Neat Noon",
      image: no4,
      designBy: "Design by EL Schmid, 2006 | 2018"
    },
    {
      name: "1.3 Chair",
      image: no2,
      designBy: "Design by Kihyun Kim, 2012"
    },
  ]
  return (
    <div className='py-10'>
      <h1 className='font-bold text-black text-3xl md:text-4xl uppercase'>Novelties</h1>
      <div className="grid grid-cols-2 gap-5 mt-6">
        {/* First product taking half the width */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex flex-col">
            <img src={noveltiesProducts[0].image} alt={noveltiesProducts[0].name} className="w-full h-auto object-cover" />
            <h2 className="mt-2 text-2xl font-bold">{noveltiesProducts[0].name}</h2>
            <p className="text-[#52667A] text-sm">{noveltiesProducts[0].designBy}</p>
          </div>
        </div>

        {/* Remaining products displayed in two columns */}
        <div className="col-span-2 md:col-span-1 grid grid-cols-2 gap-5">
          {noveltiesProducts.slice(1).map((product, index) => (
            <div key={index} className="flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
              <h2 className="mt-2 text-2xl font-bold">{product.name}</h2>
              <p className="text-sm text-[#52667A]">{product.designBy}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Novelties;