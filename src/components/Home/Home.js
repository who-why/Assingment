import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';
import { MyContext } from '../Context/Context';
import Card from '../Card/Card';

const TMDB_API_KEY = 'd1acd18a215153255124f84609f9825e';

const Home = () => {
  const { movies, setMovies } = useContext(MyContext);
  const [moviesWithImages, setMoviesWithImages] = useState([]);
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [setMovies]);

  useEffect(() => {
    const fetchMovieImages = async () => {
      const updatedMovies = await Promise.all(movies.map(async (movie) => {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: TMDB_API_KEY,
              query: movie.movie,
            },
          });
          const movieData = response.data.results[0];
          return {
            ...movie,
            image: movieData ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : 'https://via.placeholder.com/150',
          };
        } catch (error) {
          console.error(`Error fetching image for movie ${movie.movie}:`, error);
          return {
            ...movie,
            image: 'https://via.placeholder.com/150',
          };
        }
      }));

      setMoviesWithImages(updatedMovies);
    };

    if (movies.length > 0) {
      fetchMovieImages();
    }
  }, [movies]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedMovies = [...moviesWithImages].sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.rating - b.rating;
    } else if (sortOrder === 'descending') {
      return b.rating - a.rating;
    }
    return 0;
  });

  return (
    <div className="home">
      <nav className="nav">
        <div className="nav-container">
          <img 
            src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" 
            alt="Logo" 
            className="nav-logo"
          />
          <Link to="/favorite" className='nav-link'>
            Favorite
          </Link>
        </div>
      </nav>

      {/* Sorting by rating */}
      <div className="sortby">
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="" disabled hidden>Sort by rating</option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
      </div>

      {/* Movie list */}
      <div className="movie">
        {sortedMovies.map((movie) => (
          <Card
            key={movie.id}
            name={movie.movie}
            img_url={movie.image}
            rating={movie.rating}
            imdb_url={movie.imdb_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
