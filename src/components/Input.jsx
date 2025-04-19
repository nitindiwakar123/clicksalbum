import React, {useId} from 'react';

function Input({
    label,
    placeholder,
    type='text',
    className='',
    ...props
}) {
    const id = useId();
  return (
    <div className='flex flex-col rounded-2xl py-2 px-4 border-1 border-gray-500'>
        {label &&
         <label
         className='text-md text-gray-400'
         htmlFor={id}
         >{label}</label>}

        <input 
        type={type} 
        id={id}
        className={`${className} border-none outline-none text-custom-white bg-transparent`}
        {...props} 
        />
    </div>
  )
}

export default Input;