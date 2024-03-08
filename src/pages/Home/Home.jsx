import { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard';

import './Home.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatesMovies = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatesMovies(topRatedUrl);
  }, []);

  return (
    <>
    <h2>Melhores filmes:</h2>
    <div className="movies_container">
      {topMovies.length === 0 && <p>Carregando...</p>}
      {topMovies.length > 0 && topMovies.map((movie) => (
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </div>
    </>
  )
}

export default Home
