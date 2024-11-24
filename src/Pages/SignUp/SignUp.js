import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import signupImg from '../../assets/signup.png';

const SignUp = () => {
  const [seePassword, setSeePassword] = useState(false);


  return (
    <>
      <div className='flex w-11/12 m-auto'>

        <div className="w-2/4 flex items-center justify-center">
          <div className='w-3/5'>
            <div className="mb-5">
              <h3 className='font-medium text-4xl mb-5'>Sign up</h3>
              <p className='text-base'>Already Have an Account? <Link to="/login" className='text-[#38CB89] font-medium'>Sign in</Link></p>
            </div>
            {/* Sign Up Form */}
            <form>
              {/* Input Fields */}
              <div className="mb-4">
                <input className="w-full py-3 text-[#52667A] bg-white focus:outline-none border-b border-[#E0E6EB]" type="name" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <input className="w-full py-3 text-[#52667A] bg-white focus:outline-none border-b border-[#E0E6EB]" type="email" placeholder="Username" />
              </div>
              <div className="mb-4">
                <input className="w-full py-3 text-[#52667A] bg-white focus:outline-none border-b border-[#E0E6EB]" type="email" placeholder="Email Address" />
              </div>
              <div className="mb-4 relative">
                <input className="w-full py-3 text-[#52667A] bg-white focus:outline-none border-b border-[#E0E6EB]" type="password" placeholder="Your Password" />
                {
                  seePassword ? <FaRegEyeSlash onClick={() => setSeePassword(!seePassword)} className='absolute text-2xl text-[#52667A] right-0 top-4' /> :
                    <FaRegEye onClick={() => setSeePassword(!seePassword)} className='absolute text-2xl text-[#52667A] right-0 top-4' />
                }
              </div>
              <div className="mb-4">
                <input type="checkbox" />
                <label className="ml-3">I agree with <span className='font-bold text-black'>Privacy Policy</span> and <span className='font-bold text-black'>Terms of Use</span></label>
              </div>
              {/* Submit Button */}
              <div>
                <input type="submit" value="sign up" className='uppercase font-medium text-lg text-white bg-black w-full px-10 py-2 rounded-xl cursor-pointer' />
              </div>
            </form>
            {/* End Sign Up Form */}
          </div>
        </div>

        <div className='w-2/4'>
          <img src={signupImg} alt="" className='w-full h-[900px]' />
        </div>

      </div>
    </>
  );
};

export default SignUp;