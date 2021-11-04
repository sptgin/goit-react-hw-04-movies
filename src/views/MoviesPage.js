import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import MoviesSearch from '../components/MoviesSearch';
import MoviesList from '../components/MoviesList';
import MoviesAPI from '../services/move-api';
const moviesearch = new MoviesAPI();

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [moviesForSearch, setMoviesForSearch] = useState('');
  const onSubmit = searchValue => {
    setMoviesForSearch(searchValue);
  };

  useEffect(() => {
    console.log(moviesForSearch);
    moviesearch.searchQuery = `${moviesForSearch}`;
    {
      moviesForSearch && moviesearch.searchMovies().then(setMovies);
    }
  }, [moviesForSearch]);

  console.log(movies);

  return (
    <div>
      <MoviesSearch onSubmit={onSubmit} />
      <h2>Movies Page - страница поиска фильма ...</h2>
      <MoviesList movies={movies} />

      {/* {movies && (
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
      )} */}
    </div>
  );
}
