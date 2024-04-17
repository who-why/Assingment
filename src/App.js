import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'

const App = () => {
  const [isopen,setopen]=useState(false);


  return (
    <div className='main'>
         <Navbar isopen={isopen} setopen={setopen}/>
         <Home  isopen={isopen} setopen={setopen}/>
    </div>
  )
}


export default App
