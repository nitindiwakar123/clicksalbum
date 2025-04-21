import React, {useState} from 'react'
import authService from '../appwrite/authService/auth'
import { useForm } from 'react-hook-form'
import { login } from '../features/auth/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Input, Button, Spinner} from "./index";

export default function Signup() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  const create = async (data) => {
    setError("");
    setLoading(true);
    try {
      const user = await authService.createAccount(data);

      if(user) {
        const userData = await authService.getCurrentUser();

        if(userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      console.log("components :: signup :: create :: error :: ", error.message);
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
        <h3 className='text-custom-white text-lg font-semibold font-sans'>Create Account</h3>
      </div>
      <form className='w-full flex flex-col gap-5' onSubmit={handleSubmit(create)}>
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

        <Input
          label='Full Name'
          type='text'
          className=''
          {...register("fullName",
            { required: true })
          }
        />

        <Input
          label='Username'
          type='text'
          className=''
          {...register("username",
            { required: true })
          }
        />

        <Button
          type='submit'
          className='w-full py-3 mt-2 bg-custom-blue hover:bg-sky-600 text-custom-white rounded-4xl border-none outline-none'
        >
          {loading ? <Spinner /> : "Create Account"}
        </Button>
      </form>

      {error &&
        <div className='w-full text-center'>
          <p className='text-red-400 font-sans text-md'>{error}</p>
        </div>
      }

      <div className='w-full mx-auto text-center'>
        <p className='text-custom-white2 text-md'>Have an account? <button className='text-custom-blue text-md font-medium' onClick={() => navigate("/login")}>Log in</button></p>
      </div>
    </div>
  )
}
