import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Fav from './components/Fav/Fav'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Details from './components/Details/Details'


const App = () => {

  return (
    <div>
   <Router>
       <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/favorite" element={<Fav/>} />
        <Route path="/movie/:id" element={<Details/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
