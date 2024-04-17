import React, { useState, useRef, useMemo, useContext } from 'react';
import JoditEditor from 'jodit-react';
import './Home.css'
import { IoSearch } from "react-icons/io5";
import Popup from '../Popup/Popup';
import Card from '../Card/Card';
import { MyContext } from '../Context/Context';
import { useAuth0 } from '@auth0/auth0-react';

const Home = ({isopen,setopen}) => {

  const {note,setnote,bgcolor}=useContext(MyContext)
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('asc');

  const filteredNotes = note.filter((noteItem) =>
    noteItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedNotes = filteredNotes.sort((a, b) =>
    sortBy === 'asc' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)
  );

  return (
    <div className={`home${isopen ? '-open' : ''}`}>
        <div className="search">
                <div className="input-div">
                        <div className='search-icons'>
                          <IoSearch/>
                        </div>
                        <input type="text" 
                        placeholder='search notes..'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        /> 

                </div>

                <div className="filter">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                 <option value="asc">Ascending</option>
                 <option value="desc">Descending</option>
          </select>
                </div>
        </div>
        {/* notes */}

        <div className="header">
            <h2>All Notes ({note.length})</h2>
        </div>

        <div className="notes">
        {sortedNotes.map((noteItem, index) => (
          <Card key={index} notes={noteItem} />
        ))}
        </div>
         {isopen && isAuthenticated &&
             <Popup isopen={isopen} setopen={setopen} />
          }
    </div>
  )
}

export default Home