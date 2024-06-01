import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // dev-z8t52qsenr3zk5p7.us.auth0.com
  // iZgDUj30y6xtXehUbWlYyawMNzbHggIK
  // 71xomZWjPfWo_eOTG-Q-aRDumMX8p4wFzbJfvolH1h6okhBatMkCTBWcgkYCSMuP
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=58ed7e30`);
        setMovie(response.data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  console.log(movie)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

        <div className='movie-details'>
          
           <img src={movie.Poster} alt={movie.Title} />

            <div className="details">
              <h1>{movie.Title}</h1>
              <p><strong>Year:</strong> {movie.Year}</p>
              <p><strong>Rated:</strong> {movie.Rated}</p>
              <p><strong>Released:</strong> {movie.Released}</p>
              <p><strong>Runtime:</strong> {movie.Runtime}</p>
              <p><strong>Genre:</strong> {movie.Genre}</p>
              <p><strong>Director:</strong> {movie.Director}</p>
              <p><strong>Writer:</strong> {movie.Writer}</p>
              <p><strong>Actors:</strong> {movie.Actors}</p>
              <p><strong>Plot:</strong> {movie.Plot}</p>
              <p><strong>Language:</strong> {movie.Language}</p>
              <p><strong>Country:</strong> {movie.Country}</p>
              <p><strong>Awards:</strong> {movie.Awards}</p>
              <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
              <p><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
              <p><strong>Type:</strong> {movie.Type}</p>
            </div>

        </div>

  );
};

export default Details;