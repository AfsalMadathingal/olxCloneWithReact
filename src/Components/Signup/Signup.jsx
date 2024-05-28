import React ,{useContext, useEffect, useRef, useState} from 'react';
import Logo from '../../assets/olx-logo.png';
import './Signup.css';
import { useFirebase } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
import loginBg from '../../assets/login-bg.png';
import { toast } from 'react-toastify';



export default function Signup() {


  const [userName,setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [nameError,setNameError] = useState(false)
  const [emailError,setEmailError] = useState(false)
  const [phoneError,setPhoneError] = useState(false)
  const [passError,setPassError] = useState(false)
  const {signup} = useFirebase()
  const navigate = useNavigate()
  const numberRegex = /^[0-9\b]+$/;
  const nameRegex = /^[a-zA-Z ]{2,30}$/
  const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  const phoneRegex = /^[0-9]{10}$/;

  const phoneRef = useRef()


  function handleSubmit (e){

    e.preventDefault()

    if(!userName || !email || !phone || !password){
      setNameError(!userName)
      setEmailError(!email)
      setPhoneError(!phone)
      setPassError(!password)
      toast.error("Please enter all the fields")
      return
    }else if(!nameRegex.test(userName)){
      setNameError(true)
      toast.error("Please enter a valid name")
      return
    }else if(!emailRegx.test(email)){
      setEmailError(true)
      toast.error("Please enter a valid email")
      return
    }else if(!phoneRegex.test(phone)){
      setPhoneError(true)
      toast.error("Please enter a valid phone number")
      return
    }else if(!passRegex.test(password)){
      setPassError(true)
      toast.error("Please enter a valid password")
      return
    }


    signup(userName,email,password,phone).then(()=>{
      navigate('/login')
    })

  }

  const handleNumber = (e)=>{

    if(numberRegex.test(e.target.value)){
      setPhone(e.target.value)
    }else
    {
      setPhone("")
      if (phoneRef.current) {
        phoneRef.current.value = "";
      }
      toast.error("Please enter a valid phone number")
    }

  }




  return (
    <div className='w-full h-[100vh]' style={{ backgroundImage: `url(${loginBg})` }}>
      <div className="signupParentDiv bg-white w-96 p-6 shadow-md">
        <div className='flex justify-center'>
              <img width="200px" height="200px" src={Logo}></img>
        </div>
        <form onSubmit={handleSubmit}>
          <p className='text-black font-bold'>Name</p>
          {nameError && <p className='text-red-500'>Please enter A Valid Name</p>}
          <input
            onChange={(e)=>{setUserName(e.target.value)}}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            id="fname"
            name="name"
            placeholder='Enter a Name'
          />
          <br />
          <p className='text-black font-bold'>Email</p>
          {emailError && <p className='text-red-500'>Please enter A Valid Email</p>}
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            className="focus:ring-2 focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="email"
            id="email"
            name="email"
            placeholder='Enter Email'
          />
          <br />
          <p className='text-black font-bold'>Phone</p>
          {phoneError && <p className='text-red-500'>Please enter A Valid Phone Number</p>}
          <input
            
            onChange={(e)=>{handleNumber(e)}}
            className=" focus:ring-2 focus:ring-[#002f34] focus:outline-none appearance-textfield w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            id="phone"
            name="phone"
            placeholder='Enter Phone Number'
            ref={phoneRef}
          />
          <br />
          <p className='text-black font-bold'>Password</p>
         {passError && <p className='text-red-500'>Please enter A Strong Password</p>}
          <input
            onChange={(e)=>{setPassword(e.target.value)}}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-300 shadow-sm"
            type="password"
            id="lname"
            name="password"
            placeholder='Enter Password'
            
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <div className=' py-4'>
        <span  >Already have account ? <span className='font-semibold cursor-pointer' onClick={()=>{navigate('/login')}}>Login</span> </span>
        </div>
      
      </div>
    </div>
  );
}
