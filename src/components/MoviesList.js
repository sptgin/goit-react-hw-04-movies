import { Link } from 'react-router-dom';
import './MoviesList.css';
import noPosterImage from '../images/poster.jpg';

export default function MoviesList({ movies }) {
  return (
    <div className="moviesList-container">
      {movies && (
        <ul className="moviesList-list">
          {movies.results.map(movie => (
            <li className="moviesList-item" key={movie.id}>
              <Link className="moviesList-link" to={`/movie/${movie.id}`}>
                <img
                  className="moviesList-image"
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                      : noPosterImage
                  }
                  alt={movie.title}
                />
                <p className="moviesList-title">{movie.title}</p>
                <p className="moviesList-date">{movie.release_date}</p>
                {/* <p className="moviesList-reviw">{movie.overview}</p> */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
