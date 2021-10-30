import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = `movie/${movieId}`;
    moviesearch.search().then(setMovie);
  }, []);

  console.log(movie);
  return (
    <div>
      <h2>Movie Details Page - детальная информация о фильме ...</h2>
    </div>
  );
}
