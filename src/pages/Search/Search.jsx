import React, {useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom';

import '../Home/Home.css';

import MovieCard from '../../components/MovieCard/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  }

  useEffect(() => {
    const url = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(url);
  }, [query])

  return (
    <div>
      <h2>
        Resultados para: <span>{query}</span>
      </h2>
      <div className="movies_container">
      {movies.length === 0 && <h2>Carregando...</h2>}
      {movies.length > 0 && movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
    </div>
  )
}

export default Search
