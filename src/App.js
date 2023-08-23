import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=4a04ea76';

const App = () => {
    // State to store the list of movies
    const [movies, setMovies] = useState([]);

    // State to store the search term entered by the user
    const [searchTerm, setSearchTerm] = useState('');

    // Function to search for movies based on the provided title
    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        // Update the movies state with the search results
        setMovies(data.Search);
    }

    // useEffect hook to search for movies when the component mounts
    useEffect(() => {
        // Initial search for the Spiderman movie
        searchMovie('Spiderman');
    }, []);

    return (
       <div className="app">
        <h1>MovieLand</h1>

        {/* Input field for searching movies */}
        <div className="search">
            <input 
                placeholder="Search for a Movie" 
                value={searchTerm}
                // Call setSearchTerm when the input value changes
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Search icon to trigger the movie search */}
            <img
                src={SearchIcon}
                alt="Search"
                // Call searchMovie with the current searchTerm when clicked
                onClick={() => searchMovie(searchTerm)}
            />
        </div>

        {/* Display movies if available, otherwise show a message */}
        {movies?.length > 0 ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.imdbID} />
                ))}
            </div>
        ) : (
            <div className="empty">
                <h2>No movies found</h2>
            </div>
        )}
 
       </div>
    );  
}

export default App;
