import React from 'react'

export default function Button({
  children,
  type='button',
  className='',
  ...props
}) {
  return (
    <button type={type} className={`transition-colors duration-200 cursor-pointer font-sans font-normal text-md rounded-md text-sm ${className}`} {...props}>
      {children}
    </button>
  )
}
