import React from 'react'
import { Logo } from "../index";
import { House, Search, Compass, Videotape, MessageCircle, Heart, Plus, CircleUserRound, Menu } from "lucide-react";

function Sidebar() {

  return (
    <div className='w-[250px] h-full fixed top-0 left-0 bg-custom-white2 flex flex-col justify-center items-start gap-10 px-5 border-r-1 border-gray-300'>
      <div className='flex justify-start items-center gap-2'>
        <Logo width='50px' />
        <h1 className='text-2xl text-black font-segoeitalic'>ClicksAlbum</h1>
      </div>
      <div className='w-full'>
        <ul className='w-full flex flex-col justify-center items-start gap-2 list-none'>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><House size="25px" /></span>
            <span className='text-lg font-sans'>Home</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><Search size="25px" /></span>
            <span className='text-lg font-sans'>Search</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><Compass size="25px" /></span>
            <span className='text-lg font-sans'>Explore</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><Videotape size="25px" /></span>
            <span className='text-lg font-sans'>Reels</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><MessageCircle size="25px" /></span>
            <span className='text-lg font-sans'>Chat</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><Heart size="25px" /></span>
            <span className='text-lg font-sans'>Notifications</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><Plus size="25px" /></span>
            <span className='text-lg font-sans'>Create</span>
          </li>
          <li className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
            <span><CircleUserRound size="25px" /></span>
            <span className='text-lg font-sans'>Profile</span>
          </li>
        </ul>
      </div>
      <div className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
        <span><Menu size="25px" /></span>
        <span className='text-lg font-sans'>More</span>
      </div>
    </div>
  )
}

export default Sidebar