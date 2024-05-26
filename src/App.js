import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Fav from './components/Fav/Fav'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
   <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/favorite" element={<Fav/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
