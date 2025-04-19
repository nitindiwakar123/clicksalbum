import React from 'react'

export default function Button({
  children,
  type='button',
  className='',
  ...props
}) {
  return (
    <button type={type} className={`bg-custom-blue  font-sans font-medium text-md ${className}`} {...props}>
      {children}
    </button>
  )
}
