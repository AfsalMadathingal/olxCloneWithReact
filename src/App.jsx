import { useState ,useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Home from '../../olx/src/Pages/Home'
import Signup from '../../olx/src/Pages/Signup'
import Login from '../../olx/src/Pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { useFirebase } from './store/FirebaseContext';




function App() {

  const navigate = useNavigate()
  const {auth} =  useFirebase()


  return (
    <>
      <div>
      <ToastContainer theme='dark'  />
        <Routes>
          <Route path='/' element={   <Home />}/>
          <Route path='/signup' element={  <Signup/>}/>
          <Route path='/login' element={ <Login/> }/>
        </Routes>

    </div>
    </>
  )
}

export default App
