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

      if(session) {
        const userData = await authService.getCurrentUser();

        if(userData) {
          dispatch(storeLogin(userData));
          navigate('/');
        }
      }
    } catch (error) {
      console.log("components :: login :: createSession :: error :: ", error.message);
    }
    setLoading(false);
  }

    return (
      <div>
        <div>
          <h1>clicksalbum</h1>
        </div>
        <form onSubmit={handleSubmit(createSession)}>
          <Input
            label='email'
            type='email'
            className=''
            {...register("email",
              { required: true })
            }
          />
  
          <Input
            label='password'
            type='password'
            className=''
            {...register("password",
              { required: true })
            }
          />
  
          <Button type='submit'>{loading ? <Spinner />: "Log in"}</Button>
        </form>
      </div>
    )  
 }
