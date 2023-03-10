import React, { useState } from "react";
//31059aa0

import { useEffect } from "react";
import MovieCard from "./MovieCard";
import'./App.css';
import SearchIcon from './search.svg';

const Api_url='http://www.omdbapi.com?apikey=31059aa0';

const App = ()=>{
const[movies, setMovies]=useState([]);
const[searchTerm,setSearchTerm]=useState('');

const searchMovies=async(title)=>{
const response=await fetch(`${Api_url}&s=${title}`);
const data=await response.json();

setMovies(data.Search);
 }
 useEffect(()=>{
searchMovies('avenger');

 },[]);

    return(
<div className="app">
<h1>Movie's Now</h1>
<div className="search">
    <input placeholder="search your movies here"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    />

    <img src={SearchIcon} 
    alt="search"
     onClick ={() => searchMovies(searchTerm)}
     />
</div>
{movies?.length > 0
    ?(
        <div className="container">
          {movies.map((movie)=>(
          <MovieCard  movie={movie}/>
          ))}
        </div>
    ):(<div className="empty">
        <h2>No Movies</h2>
    </div>)
}

</div>
    );
}

export default App;