import React, { useContext } from 'react';
import './Fav.css';
import { MyContext } from '../Context/Context';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

const Fav = () => {
    const { fav } = useContext(MyContext);

    return (
        <div className='fav'>
            <Link to="/" className="back-link">
                {'<'} Back To Home
            </Link>

            <div className="movie">
                {fav.map((movie) => (
                    <Card
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        name={movie.name} 
                        image={movie.image} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Fav;
