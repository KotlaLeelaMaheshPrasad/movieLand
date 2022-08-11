import {useParams} from 'react-router-dom';
import 'C:/Users/K.Satya Krishna/Desktop/movieland/src/pages/specm.css';

import { useState, useEffect} from 'react';







const Specm = () => {
    const {Title} = useParams();
    console.log(Title);
    
    const [movie, setMovie] = useState({});
    

const API_URL = "http://www.omdbapi.com?apikey=ea7da1d9";

useEffect(() => {
    console.log("hi");
    searchMovie(Title);
  },[]);


const searchMovie = async (Title) => {
    const response = await fetch(`${API_URL}&t=${Title}`);
    const data = await response.json();
    console.log(data);

    setMovie(data);
  };


console.log(movie.Poster);
    


    return (<>
    <div class="info">
                <img src={movie.Poster} class="poster" />
                <div>
                    <h2>{movie.Title}</h2>
                    <div class="rating">
                        <h4>IMDB rating:</h4>
                        <h4>{movie.imdbRating}/10</h4>
                    </div>
                    <div class="details">
                        <span>{movie.Rated}</span>
                        <span>{movie.Year}</span>
                        <span>{movie.Runtime}</span>
                    </div>
                    <div class="genre">
                        {movie&& movie.Genre&&movie.Genre.split(",").map((genre) =>
                         (<div>{genre}</div>))}
                    </div>
                </div>
            </div>
            <h3>Plot:</h3>
            <p>{movie.Plot}</p>
            <h3>Cast:</h3>
            <p>{movie.Actors}</p>
    </>
  );

};

export default Specm;