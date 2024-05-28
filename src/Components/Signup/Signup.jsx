import React ,{useContext, useState} from 'react';
import Logo from '../../assets/olx-logo.png';
import './Signup.css';
import { useFirebase } from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';


export default function Signup() {


  const [userName,setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const {signup} = useFirebase()
  const navigate = useNavigate()
  function handleSubmit (e){

    e.preventDefault()

    if(!userName || !email || !phone || !password){
      alert("Please enter all the fields")
    }


    signup(userName,email,password,phone).then(()=>{
      navigate('/login')
    })

  }



  return (
    <div>
      <div className="signupParentDiv w-96 p-6 shadow-md">
        <div className='flex justify-center'>
              <img width="200px" height="200px" src={Logo}></img>
        </div>
        <form onSubmit={handleSubmit}>
          <label className=' font-semibold' htmlFor="fname">Name</label>
          <br />
          <input
            onChange={(e)=>{setUserName(e.target.value)}}
            className="focus:ring-2  focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="text"
            id="fname"
            name="name"
            placeholder='Enter a Name'
          />
          <br />
          <label className=' font-semibold' htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e)=>{setEmail(e.target.value)}}
            className="focus:ring-2 focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="email"
            id="email"
            name="email"
            placeholder='Enter Email'
          />
          <br />
          <label className=' font-semibold' htmlFor="phone">Phone</label>
          <br />
          <input
            onChange={(e)=>{setPhone(e.target.value)}}
            className="focus:ring-2 focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
            type="number"
            id="phone"
            name="phone"
            placeholder='Enter Phone Number'
          />
          <br />
          <label className=' font-semibold' htmlFor="password">Password</label>
          <br />
          <input
            onChange={(e)=>{setPassword(e.target.value)}}
            className="focus:ring-2 focus:ring-[#002f34] focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-300 shadow-sm"
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
