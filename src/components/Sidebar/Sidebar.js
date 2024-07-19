import React from 'react';
import { AiFillAppstore, AiOutlineHome } from "react-icons/ai";
import { IoRestaurantSharp, IoBeerOutline } from "react-icons/io5";
import { IoSettings, IoMusicalNotes } from "react-icons/io5";
import { BsStopwatchFill, BsFillBellFill } from "react-icons/bs";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="icon">
        <AiFillAppstore />
      </div>
      <div className="icon">
        <IoRestaurantSharp />
      </div>
      <div className="icon">
        <IoSettings />
      </div>
      <div className="icon">
        <BsStopwatchFill />
      </div>
      <div className="icon">
        <AiOutlineHome />
      </div>
      <div className="icon">
        <IoBeerOutline />
      </div>
      <div className="icon">
        <IoMusicalNotes />
      </div>
      <div className="icon">
        <BsFillBellFill />
      </div>
    </div>
  );
}

export default Sidebar;
