import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { IoSearch } from "react-icons/io5";
import { MyContext } from '../Context/Context';
import axios from 'axios';
import Card from '../Card/Card';

// api=https://www.omdbapi.com/?s={text}&apikey=58ed7e30

const Home = () => {
    const [text, setText] = useState('');
    const [debouncedText, setDebouncedText] = useState('');
    const { movies, setMovies } = useContext(MyContext);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedText(text);
        }, 500); 

        return () => {
            clearTimeout(handler);
        };
    }, [text]);
   


    useEffect(() => {
        const fetchMovies = async () => {
            if (debouncedText.trim() === '') return;

            try {
                const response = await axios.get(`https://www.omdbapi.com/?s=${debouncedText}&apikey=58ed7e30`);
                setMovies(response.data.Search);
            } catch (error) {
                console.error('Error fetching the movies:', error);
            }
        };

        fetchMovies();
    }, [debouncedText, setMovies]);

    return (
        <div className="home">
            <div className="search">
                <input
                    type="text"
                    placeholder='Search movie...'
                    onChange={(e) => setText(e.target.value)}
                />
                <div className='icon'>
                    <IoSearch />
                </div>
            </div>
            <div className="movie">
                {movies?.map((movie) => (
                    <Card
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        name={movie.Title}
                        image={movie.Poster}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
