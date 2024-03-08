import {useState, useEffect} from 'react'

import { FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import './Movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const Movie = () => {
  const [movie, setMovie] = useState('');

  const {id} = useParams();

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);

    console.log(data);
  }

  useEffect(() => {
    const url = `${moviesURL}${id}?${apiKey}`;

    getMovie(url);
  })

  return (
    <div className='movie_container'>
      {movie && <>
      <img src={imageUrl + movie.poster_path} alt={movie.title} /> 
      <h2>{movie.title}</h2>
      <p> <FaStar /> {movie.vote_average} </p>
      <p>{movie.tagline}</p>
      <div className="movie_informations">
        <p><strong> <BsGraphUp /> Orçamento:</strong> ${(movie.budget).toLocaleString('pt-BR')}</p>
        <p><strong> <BsWallet2 /> Receita:</strong> ${(movie.revenue).toLocaleString('pt-BR')}</p>
        <p><strong> <BsHourglassSplit /> Duração:</strong> {movie.runtime} minutos</p>
        <p><strong> <BsFillFileEarmarkTextFill /> Descrição:</strong> {movie.overview}</p>
      </div> 
      </>}
    </div>
  
  )
}

export default Movie
