import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import './App.css'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>
       <Navbar/>
        <div className="home">
              <Sidebar/>
              <Home/>
        </div>
    </>
  )
}

export default App
