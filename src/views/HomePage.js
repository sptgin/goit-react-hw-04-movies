import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function HomePage() {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = 'trending/movie/day';
    moviesearch.search().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
