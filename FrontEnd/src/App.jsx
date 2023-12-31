import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import {GoogleOAuthProvider} from "@react-oauth/google";
import Login from './components/Login';
import Home from './containers/Home';
import './App.css'

function App() {

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID} >
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  )
}

export default App