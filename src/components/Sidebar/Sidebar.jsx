import React, { useState } from 'react'
import { Logo, CreatePost } from "../index";
import { House, Search, Compass, Videotape, MessageCircle, Heart, Plus, CircleUserRound, Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [actionView, setActionView] = useState("");

  const listItems = [
    {
      title: "Home",
      icon: <House />,
      action: "navigate",
      path: "/"
    },
    {
      title: "Search",
      icon: <Search />,
      action: "view",
      view: "search"
    },
    {
      title: "Explore",
      icon: <Compass />,
      action: "navigate",
      path: "/explore"
    },
    {
      title: "Reels",
      icon: <Videotape />,
      action: "navigate",
      path: "/reels"
    },
    {
      title: "Chat",
      icon: <MessageCircle />,
      action: "navigate",
      path: "/messages"
    },
    {
      title: "Notification",
      icon: <Heart />,
      action: "view",
      view: "notification"
    },
    {
      title: "Create",
      icon: <Plus />,
      action: "create",
      view: "createPost"
    },
    {
      title: "Profile",
      icon: <CircleUserRound />,
      action: "navigate",
      path: "/profile"
    },
  ]

  return (
    <div className='w-[250px] h-full fixed top-0 left-0 bg-custom-white2 flex flex-col justify-center items-start gap-10 px-5 border-r-1 border-gray-300'>
      {isCreatePost && <CreatePost />}
      <div className='flex justify-start items-center gap-2'>
        <Logo width='50px' />
        <h1 className='text-2xl text-black font-segoeitalic'>ClicksAlbum</h1>
      </div>
      <div className='w-full'>
        <ul className='w-full flex flex-col justify-center items-start gap-3 list-none'>
          {listItems && listItems.map((item) => (
             <li key={item.title} className='w-full'>
              <button
                onClick={() => {
                  if(item.action === "navigate" && item.path) {
                    navigate(item.path);
                  } else if(item.action === "view" && item.view) {
                    setActionView(item.view);
                  } else if(item.action === "create" && item.view === "createPost") {
                    setIsCreatePost(true);
                  }
                }} 
                className='w-full py-2 px-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray2'>
              <span>{item.icon}</span>
              <span className='text-lg font-sans'>{item.title}</span>
              </button>
           </li>
          ))}
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