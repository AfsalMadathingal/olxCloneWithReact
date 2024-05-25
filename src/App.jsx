import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from '../../olx/src/Pages/Home'
import Signup from '../../olx/src/Pages/Signup'

function App() {



  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={   <Home />}/>
          <Route path='/signup' element={  <Signup/>}/>
        </Routes>

    </div>
    </>
  )
}

export default App
