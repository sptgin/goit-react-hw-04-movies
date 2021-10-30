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
  console.log(url);

  return (
    <div>
      <h2>Trending today</h2>
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
