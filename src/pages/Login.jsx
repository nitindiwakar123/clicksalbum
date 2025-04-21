import React from 'react';
import { Login as LoginCompo } from '../components';

export default function Login() {
  console.log("Hello Login");

  return (
    <div className='w-full flex flex-col md:flex-row bg-dark-black'>
      <div className='w-full md:w-1/2 py-10 md:py-20 flex flex-col justify-center gap-5'>
        <div className='flex justify-center items-center'>
          <img className='w-28' src="/assets/logo.png" alt="logo" />
        </div>
        <div className='hidden md:block text-center'>
          <p className='mx-auto text-custom-white text-4xl text-balance leading-14'>Share what you're into with the people <span className='bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text'>who get you</span>.</p>
        </div>
        <div className='w-full hidden md:flex justify-center items-center'>
          <img className='object-cover w-1/2' src="/assets/login-banner.png" alt="login-banner" />
        </div>
      </div>
      <div className='w-full md:w-1/2 py-10 bg-custom-gray'>
        <LoginCompo />
      </div>
    </div>
  )
}
