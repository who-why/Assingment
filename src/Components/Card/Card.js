import React, { useContext, useState } from 'react'
import './Card.css'
import { MdDelete } from "react-icons/md";
import { MyContext } from '../Context/Context';


const Card = ({notes}) => {
  const { setnote, note} = useContext(MyContext);

  const handleDelete = () => {
    const updatedNotes = note.filter((n) => n !== notes);
    setnote(updatedNotes);
  };

  const renderContent = () => {
    if (notes.type === 'image') {
      return <img src={notes.content} alt={notes.title} />;
    } else if (notes.type === 'video') {
      return <video controls src={notes.content} />;
    } else {
      return <div>{notes.content}</div>;
    }
  };

  return (
    <div className='card' style={{ backgroundColor: notes.bgcolor, color: notes.bgcolor === 'white' || notes.bgcolor === '' ? 'black' : 'white' }}>
            <h3>{notes.title}</h3>
            {renderContent()}
    
     <div className="below">
         <p style={{color: notes.bgcolor === 'white' || notes.bgcolor === '' ? 'black' : 'white'}}>{notes.date}</p>
          <div className="dlt" onClick={handleDelete}>
              <MdDelete style={{color: notes.bgcolor === 'white' || notes.bgcolor === '' ? 'red' : 'white'}}/>
           </div>
        </div>
    </div>

  )
}

export default Card
