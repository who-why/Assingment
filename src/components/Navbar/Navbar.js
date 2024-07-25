import React from 'react'
import { IoMdNotifications } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='nav'>
        <div className='menu'>
            <IoMdMenu className='menu-icon'/>
            <h3>Tables</h3>
        </div>


        <div className="icons">
               <div className='icon-item'>
                 <IoMdNotifications/>
               </div>

               <div className='icon-item'>
                  <CgProfile/>
               </div>

               <p>Ravi kumar</p>

        </div>

    </div>
  )
}

export default Navbar
