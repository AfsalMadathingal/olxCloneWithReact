import React, { useState } from 'react';
import Logo from '../../assets/olx-logo.png';
import './Login.css';
import { useFirebase } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


function Login() {

  const {login } =useFirebase()
  const [email,setEmail]= useState()
  const [password,setPassword]= useState()
  const navigate = useNavigate()

  const handleSubmit = (e)=>{

    e.preventDefault()
    
    login(email,password).then(()=>{

      navigate('/')

    }).catch((error)=>{
      toast.error(error.code.split('/')[1].split('-').join(" "))
      console.log(error);
    })

  }

  return (
    <div>
      <div className="loginParentDiv w-96 p-6 shadow-md">
        <div className='flex justify-center'>
        <img width="200px" height="200px" src={Logo}></img>
        </div>
        
        <form onSubmit={handleSubmit}>
          <label className='font-semibold'  htmlFor="Email">Email</label>
          <br />
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"

            type="email"
            id="email"
            name="email"
            defaultValue="John@example.com"
          />
          <br />
          <label className='font-semibold' htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e)=>{setPassword(e.target.value)}}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"

            type="password"
            id="password"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='py-2 px-0 cursor-pointer font-semibold' onClick={()=>{navigate('/signup')}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
