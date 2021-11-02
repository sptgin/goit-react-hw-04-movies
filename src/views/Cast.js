import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCast from '../components/MovieCast';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = `movie/${movieId}/credits`;
    moviesearch.search().then(setCast);
  }, []);

  return (
    <div>
      <h2>Cast</h2>
      {cast && <MovieCast cast={cast} />}
    </div>
  );
}
