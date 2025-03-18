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
    <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input 
        type={type} 
        id={id}
        className={`${className}`}
        {...props} 
        />
    </div>
  )
}

export default Input;