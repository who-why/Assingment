import React, { useState, useRef, useContext, useEffect } from 'react';
import './Popup.css'
import JoditEditor from 'jodit-react';
import { MyContext } from '../Context/Context';


const Popup = ({isopen,setopen}) => {
  const editor = useRef(null);
	const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const {note,setnote,bgcolor,setbgcolor}=useContext(MyContext)

  const handleSubmit = () => {
    if (title && content) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: true };
     const currentDate = new Date().toLocaleString('en-US', options);
      setnote([...note, { title, content, date: currentDate,bgcolor }]);
      setTitle('');
      setContent('');
      setopen(!isopen);
    } else {
      alert('Please fill in title and content fields');
    }
  };

  const handleBgColorChange = (e) => {
    setbgcolor(e.target.value);
  };
   
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(note));
  }, [note]);
  


  return (
    <div className='pop'>
    <div className="upper">
      <h1>Create note</h1>
      <p onClick={() => setopen(!isopen)}>x</p>
    </div>
    <input type="text" placeholder='title..' value={title} onChange={(e) => setTitle(e.target.value)} />
    <div className="text-editor">
         <JoditEditor
            ref={editor}
            value={content}
         config={{
               enter: 'br',
               buttons: ['source', '|', 'bold', 'italic', '|', 'image', 'video'],
               allowImages: true,
               allowVideos: true,
        }}
            onBlur={(newContent) => setContent(newContent)}
            onChange={(newContent) => {}}
        />

    </div>

    <div className="change">
      <div className="bg-color">
        <p>BgColor: </p>
        <select value={bgcolor} onChange={handleBgColorChange}>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">green</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  </div>
  )
}

export default Popup