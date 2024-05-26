import React, { useContext } from 'react'
import './Fav.css'
import { MyContext } from '../Context/Context'
import Card from '../Card/Card';
import { Link} from 'react-router-dom';


const Fav = () => {
    const {fav,setFav}=useContext(MyContext);

  return (
    <div className='fav'>
       
        <Link to="/" className="back-link">
          {'<'} Back To Home
        </Link>

     <div className="movie">
        {fav.map((movie) => (
          <Card
             key={movie.id} 
             name={movie.name}
             img_url={movie.img_url}
             rating={movie.rating}
             imdb_url={movie.imdb_url}
          />
        ))}
      </div>
    </div>
  )
}

export default Fav
