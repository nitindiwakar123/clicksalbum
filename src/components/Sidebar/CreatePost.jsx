import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImagesIcon } from 'lucide-react';
import {Button} from "../index";
import { motion } from 'motion/react';

function CreatePost() {

  const [file, setFile] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
  });

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className='fixed inset-x-0 w-[420px] h-[420px] rounded-lg mx-auto flex flex-col justify-center items-center bg-red-500 overflow-hidden'>
      <div className='w-full bg-dark-black py-1 border border-b-neutral-500'>
        <p className='text-custom-white2 font-semibold text-md text-center'>Create Post</p>
      </div>
      <div 
        {...getRootProps()}
        className={`w-full h-full ${isDragActive?  "bg-neutral-800":  "bg-neutral-700"} transition-colors duration-300`}
        >
          <input {...getInputProps()} />
          
          {console.log("file: ", file)}
          
            {file ?
            <img
             src={file}
             alt="post"
             className='w-full h-full object-cover'
              /> 
            : <div className='flex flex-col justify-center items-center my-25 gap-4 overflow-hidden'> 
            <ImagesIcon color='white' size={80} />
            <p className='text-2xl font-normal font-sans text-custom-white2 text-center'>Drag photos and videos here</p>
            <Button className='text-custom-white2 bg-[#1877F2] font-normal py-1 px-2 rounded-md text-sm mx-auto'>Select from computer</Button>
            </div> 
            }
      </div>
    </div>
  )
}

export default CreatePost;