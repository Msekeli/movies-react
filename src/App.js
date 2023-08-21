import React, { useEffect } from "react";

// importing css
import './App.css';
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=4a04ea76';

const  App = () => {
    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data);
    }
    useEffect(() =>{
      searchMovie('Spiderman');
    },[]);

    return (
       <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
            placeholder="find movie" 
            value="Spiderman"
            onChange={() => {}}
            />
            <img src={SearchIcon} alt="Movie image"
            onClick={() => {}}
            />
        </div>

        <div className="container">
            
        </div>
       </div>
    );  
}

export default App;