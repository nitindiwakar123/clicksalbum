import React from 'react';
import { useSelector } from 'react-redux';
import { logoImage } from '../assets';
import {SettingsIcon} from "lucide-react";
import { Button } from '../components';

export default function Profile() {

  const userData = useSelector((state) => state.auth.userData);

  return (
    <div className='w-full flex flex-col justify-center items-center py-10 bg-blue-500'>
      <div className='w-[60%] mx-auto flex justify-center gap-20 items-center bg-red-500'>
        <div className='w-34 rounded-full overflow-hidden border border-gray-400'>
          <img src={logoImage} alt="User profile picture" className=' object-cover ' />
        </div>
        <div className='flex flex-col justify-center items-center gap-5'>
          <div className='flex gap-2 items-center'>
            <h2>user_name</h2>
            <Button className='py-2 px-4 bg-gray-400 font-medium font-sans'>Edit profile</Button>
            <Button className='py-2 px-4 bg-gray-400 font-medium font-sans'>View archive</Button>
            <SettingsIcon />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
