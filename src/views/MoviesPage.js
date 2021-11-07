import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Notification } from 'react-pnotify';
import MoviesSearch from '../components/MoviesSearch';
import MoviesList from '../components/MoviesList';
import MoviesAPI from '../services/move-api';
import SpinnerLoader from '../components/Loader';
import './MoviesPage.css';

const moviesearch = new MoviesAPI();

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [moviesForSearch, setMoviesForSearch] = useState('');
  const [status, setStatus] = useState('init');
  const [errorMessage, setErrorMessage] = useState('');
  const onSubmit = searchValue => {
    setMoviesForSearch(searchValue);
  };

  useEffect(() => {
    if (moviesForSearch === '') {
      return;
    }
    setStatus('pending');
    moviesearch.searchQuery = `${moviesForSearch}`;
    moviesearch.searchMovies().then(movies => {
      if (movies.results.length > 0) {
        setMovies(movies);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('No movies found ...');
      }
    });
  }, [moviesForSearch]);

  if (status === 'init') {
    return <MoviesSearch onSubmit={onSubmit} />;
  }

  if (status === 'pending') {
    return <SpinnerLoader />;
  }

  if (status === 'success') {
    return (
      <div>
        <div className="moviesPage-search">
          <MoviesSearch onSubmit={onSubmit} />
        </div>

        <div className="moviesPage-container">
          <MoviesList movies={movies} />
        </div>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div>
        <MoviesSearch onSubmit={onSubmit} />
        <Notification type="error" title="Error" text={errorMessage} />
      </div>
    );
  }
}
