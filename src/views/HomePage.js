import { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function HomePage() {
  const { url, path } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = 'trending/movie/week';
    moviesearch.search().then(setMovies);
  }, []);

  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
}
