import { useState, useEffect } from 'react';
import { Notification } from 'react-pnotify';
import MoviesList from '../components/MoviesList';
import MoviesAPI from '../services/move-api';
import SpinnerLoader from '../components/Loader';
import './HomePage.css';

const moviesearch = new MoviesAPI();

export default function HomePage() {
  const [status, setStatus] = useState('init');
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    setStatus('pending');
    moviesearch.searchQuery = 'trending/movie/week';
    moviesearch.search().then(movies => {
      if (movies.results.length > 0) {
        setMovies(movies);
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage('No movies found ...');
      }
    });
  }, []);

  if (status === 'init') {
    return <h2>Trending today</h2>;
  }

  if (status === 'pending') {
    return <SpinnerLoader />;
  }

  if (status === 'success') {
    return (
      <div className="homePage-container">
        <h2 className="homePage-title">Trending today</h2>
        <MoviesList movies={movies} />
      </div>
    );
  }
  if (status === 'error') {
    return <Notification type="info" title="Error" text={errorMessage} />;
  }
}
