import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieReviws from '../components/MovieReviws';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = `movie/${movieId}/reviews`;
    moviesearch.search().then(setReviews);
  }, []);

  return (
    <div>
      <h2>Reviws</h2>
      {reviews && <MovieReviws reviews={reviews} />}
    </div>
  );
}
