import React, { useContext } from 'react';
import './Card.css';
import { FaRegStar, FaStar } from "react-icons/fa";
import { MyContext } from '../Context/Context';
import { Link } from 'react-router-dom';

const Card = ({ name, img_url, rating, imdb_url }) => {
  const formattedRating = rating.toFixed(1);
  const { fav, setFav } = useContext(MyContext);

  const isFavorite = fav.some(movie => movie.name === name);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); 
    if (isFavorite) {
      setFav(fav.filter(movie => movie.name !== name));
    } else {
      setFav([...fav, {name, img_url, rating, imdb_url }]);
    }
  };

  const handleCardClick = () => {
    window.open(imdb_url, '_blank'); 
  };

  return (
    <div className='card'
      onClick={handleCardClick}
      style={{ backgroundImage: `url(${img_url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='star' onClick={handleFavoriteClick}>
        {isFavorite ? <FaStar style={{ color: 'white' }} /> : <FaRegStar />}
      </div>
      <div className='bottom'>
        <h4>{name}</h4>
        <div className='rating'>
          <p>{formattedRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
