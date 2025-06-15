import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ImagesIcon, MoveLeftIcon, XIcon } from 'lucide-react';
import { Button, PostForm } from "../index";
import { motion, useAnimate } from 'motion/react';

function CreatePost() {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [scope, animate] = useAnimate();

  const onDrop = useCallback(acceptedFiles => {
    setFile(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [width, setWidth] = useState(440);

  useEffect(() => {
    animate(scope.current, {opacity: 1}, {duration: 0.3})
  }, [])
  

  return (
    <motion.div
    ref={scope}
    initial={{
      opacity: 0
    }}
      className={`fixed bg-transparent inset-x-0 inset-y-0 flex flex-col justify-center items-center rounded-xl mx-auto overflow-hidden`}
    >
      <div
      className='overflow-hidden rounded-2xl h-[440px] bg-transparent'
        style={{
          width: width
        }}
      >
        <div className='w-full bg-dark-black py-1 flex justify-between items-center border-b-1 border-b-neutral-500'

        >
          {file &&
            <button className='text-white' onClick={() => {
              if (width === 420) return;
              setWidth(440);
            }}>
              <MoveLeftIcon />
            </button>
          }
          <p className='text-custom-white2 mx-auto font-semibold text-md text-center'>Create Post</p>
          {file && <button onClick={() => {
            setWidth(780);
          }} className='text-blue-600 cursor-pointer'>Next</button>}
        </div>

        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[450px] h-full flex flex-col justify-center items-center overflow-hidden'>

            <div
              {...getRootProps()}
              className={`w-full h-full ${isDragActive ? "bg-neutral-800" : "bg-neutral-700"} transition-colors duration-300`}
            >
              <input {...getInputProps()} />


              {preview ?
                <img
                  src={preview}
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
          {width === 780 &&
            <div className='w-[350px] py-2 px-5 h-full overflow-y-hidden bg-custom-gray3'>
              <PostForm />
            </div>
          }
        </div>
      </div>

     
    </motion.div>
  )
}


export default CreatePost;