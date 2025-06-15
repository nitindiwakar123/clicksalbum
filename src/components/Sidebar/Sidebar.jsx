import React, { useState, useEffect } from 'react'
import { Logo, CreatePost } from "../index";
import { House, Search, Compass, Videotape, MessageCircle, Heart, Plus, CircleUserRound, Menu, XIcon } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { motion, useAnimate } from 'motion/react';


function Sidebar() {

  const navigate = useNavigate();
  const [isCreatePost, setIsCreatePost] = useState(false);
  const [actionView, setActionView] = useState("");
  const [scope, animate] = useAnimate();

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

  useEffect(() => {
    animate("li", { opacity: 1 }, {duration: 1})
  })
  

  return (
    <div ref={scope} className='w-[250px] h-full fixed top-0 left-0 bg-transparent flex flex-col justify-center items-start gap-10 px-5 border-r-1 border-gray-300'>
      {isCreatePost && <CreatePost />}
      <div className='flex justify-start items-center gap-2 bg-transparent'>
        <Logo width='50px' />
        <h1 className='text-2xl text-custom-white3 font-segoeitalic'>ClicksAlbum</h1>
      </div>
      <div className='w-full bg-transparent'>
        <ul className='w-full bg-transparent flex flex-col justify-center items-start gap-3 list-none'>
          {listItems && listItems.map((item) => (
            <motion.li
            initial={{
              opacity: 0
            }}
              key={item.title} className='w-full bg-transparent text-custom-white3'>
              <button
                onClick={() => {
                  if (item.action === "navigate" && item.path) {
                    navigate(item.path);
                  } else if (item.action === "view" && item.view) {
                    setActionView(item.view);
                  } else if (item.action === "create" && item.view === "createPost") {
                    setIsCreatePost(true);
                  }
                }}
                className='w-full py-2 px-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray3'>
                <span>{item.icon}</span>
                <span className='text-lg font-sans'>{item.title}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className='w-full py-2 rounded-md flex justify-start items-center gap-2 cursor-pointer hover:bg-custom-gray3 text-custom-white3'>
        <span><Menu size="25px" /></span>
        <span className='text-lg font-sans'>More</span>
      </div>

     {isCreatePost && 
      <button
        className='fixed top-5 right-5 cursor-pointer'
        onClick={() => setIsCreatePost(false)}
      >
        <XIcon className='text-white' />
      </button>
     }
    </div>
  )
}

export default Sidebar