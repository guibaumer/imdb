import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './MovieCard.css'

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
  return (
    <div className='movie_card'>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="container">
        <p>
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    </div>
  )
}

export default MovieCard