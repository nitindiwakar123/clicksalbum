import React from 'react'
import {logoImage} from "../assets";

function Logo({
  width="100px"
}) {
  return (
    <div style={{width: width}}>
        <img className='w-full object-cover' src={logoImage} alt="" />
    </div>
  )
}

export default Logo;