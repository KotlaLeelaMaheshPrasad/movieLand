import SearchIcon from 'C:/Users/K.Satya Krishna/Desktop/movieland/src/search.svg';
import 'C:/Users/K.Satya Krishna/Desktop/movieland/src/App.css';
import MovieCard from 'C:/Users/K.Satya Krishna/Desktop/movieland/src/components/MovieCard.jsx';
import {Link} from 'react-router-dom';

import {useEffect, useState} from 'react';
const API_URL = "http://www.omdbapi.com?apikey=ea7da1d9";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();



    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (

            <Link to = {`/${movie.Title}`}>
                <MovieCard movie={movie} />
            </Link>

          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default SearchPage;