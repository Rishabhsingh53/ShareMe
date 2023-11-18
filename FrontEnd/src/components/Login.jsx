import React from 'react'
import {client} from "../client"
import {useNavigate} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"
import { GoogleLogin , googleLogout} from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle=(response)=>{
      localStorage.setItem('user', JSON.stringify(response.profileObj));
      console.log("profile Obj",response.profileObj);
      var decodedHeader = jwtDecode(response.credential);
      console.log(decodedHeader);
  
      const { name, sub, picture } = decodedHeader;
  
      const doc = {
        _id: sub,
        _type: 'user',
        userName: name,
        image: picture,
      }

      client.createIfNotExists(doc).then((res) => {
        navigate("/", { replace: true })
      })
    }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className='relative h-full w-full'>
        <video
          src={shareVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          controls = {false}
          className="object-cover h-full w-full"
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div>
            <GoogleLogin onSuccess={(response) => responseGoogle(response)} onError = {(error) => responseGoogle(error)} /> 
          </div>
        </div>
        <div className='shadow-2xl'>
        </div>
      </div>
    </div>
  )
}

export default Login
