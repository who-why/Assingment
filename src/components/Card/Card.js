import React, { useContext } from 'react';
import './Card.css';
import { FaRegStar, FaStar } from "react-icons/fa";
import { MyContext } from '../Context/Context';
import { Link } from 'react-router-dom';


const Card = ({ name,image,imdbID }) => {
  const { fav, setFav } = useContext(MyContext);

  const isFavorite = fav.some(movie => movie.imdbID === imdbID);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    if (isFavorite) {
      setFav(fav.filter(movie => movie.imdbID !== imdbID));
    } else {
      setFav([...fav, {name,image,imdbID}]);
    }
  };
 
  console.log(fav)
 

  return (
       // <Link to={`movie/${imdbID}`}>
            <div className='card'
                  style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              
                    <div className='star' onClick={handleFavoriteClick}>
                     {isFavorite ? <FaStar style={{ color: 'white' }} /> : <FaRegStar />}
                    </div>
                    
                  <div className='view'>
                      <Link to={`movie/${imdbID}`} className='link'>
                        View Details
                      </Link>
                  </div>

                <div className='bottom'>
                     <h4>{name}</h4>
                 </div>

            </div>
       // </Link>
  );
};

export default Card;