import React from 'react';
import { CiMail } from "react-icons/ci";
import newsLetterImg3 from '../../../assets/newLetterImg3.png';
import newsLetterImg2 from '../../../assets/newsletterImg2.png';


const NewLetter = () => {
  return (
    <div className='w-11/12 m-auto py-10'>

      <div className='flex w-full'>
        <div className='w-3/12 bg-[#eee]'>
          <img className='w-full' src={newsLetterImg2} alt="" />
        </div>

        <div className='bg-[#eee] w-2/4 text-center flex justify-center items-center flex-col'>
          <h1 className='uppercase text-5xl text-black font-medium'>Join Our Newsletter</h1>
          <p className='text-xl mt-3'>Sign up for deals, new products and promotions</p>
          <div className='relative mt-5'>
            <form className='flex justify-center items-center w-full'>
              <CiMail className='absolute left-[1px] bottom-[14px] text-3xl' />
              <input className='bg-transparent text-[#52667A] w-[450px] py-4 pl-9 border-b border-[#9DADBE] focus:outline-none' placeholder='Email Address' type="email" />
              <input className='bg-black px-10 py-2 text-white rounded-xl text-base font-medium absolute right-0 bottom-2 cursor-pointer' type="submit" value="Sign Up" />
            </form>
          </div>
        </div>


        <div className='w-3/12 bg-[#eee]'>
          <img className='h-full w-full' src={newsLetterImg3} alt="" />
        </div>
      </div>

    </div>
  );
};

export default NewLetter;