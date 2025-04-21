import React, { useState } from 'react';
import authService from '../appwrite/authService/auth';
import { login as storeLogin, logout } from '../features/auth/auth';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, Input, Spinner } from './index';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const createSession = async (data) => {
    setError("");
    setLoading(true);
    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(storeLogin(userData));
          navigate('/');
        }
      }
    } catch (error) {
      console.log("components :: login :: createSession :: error :: ", error.message);
      setError(error.message);
    }
    setLoading(false);
  }

  return (
    <div className='w-full mx-auto px-12 flex flex-col items-center gap-8'>
      <div>
        <h1 className='font-segoeitalic text-4xl text-custom-white2'>ClicksAlbum</h1>
      </div>
      <div className='w-full text-start'>
        <h3 className='text-custom-white text-lg font-semibold font-sans'>Log into ClicksAlbum</h3>
      </div>
      <form className='w-full flex flex-col gap-5' onSubmit={handleSubmit(createSession)}>
        <Input
          label='Email'
          type='email'
          className='w-full'
          placeholder="Email"
          {...register("email",
            { required: true })
          }
        />

        <Input
          label='Password'
          type='password'
          className=''
          {...register("password",
            { required: true })
          }
        />

        <Button
          type='submit'
          className='w-full py-3 mt-2 bg-custom-blue hover:bg-sky-600 text-custom-white rounded-4xl border-none outline-none'
        >
          {loading ? <Spinner /> : "Log in"}
        </Button>
      </form>

      <div className='w-full text-center'>
        <p className='text-custom-white text-md font-semibold font-sans'>Forgot password?</p>
      </div>

      {error &&
        <div className='w-full text-center'>
          <p className='text-red-400 font-sans text-md'>{error}</p>
        </div>
      }

      <div className='w-full'>
        <Button
          className='w-full py-3 rounded-4xl bg-transparent border-1 border-sky-500  text-[#5DB2FE] hover:bg-gray-800'
          onClick={() => navigate("/signup")}
        >
          Create new account
        </Button>
      </div>
    </div>
  )
}
