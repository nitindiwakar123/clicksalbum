import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from "../src/store/store.js";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {Create, Explore, Home, Notifications, Profile, Reels, Saved, Settings, Login, Signup} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/explore/' element={<Explore />} />
      <Route path='/reels/' element={<Reels />} />
      <Route path='/notifications/' element={<Notifications />} />
      <Route path='/create/' element={<Create />} />
      <Route path='/profile/' element={<Profile />} />
      <Route path='/saved' element={<Saved />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
