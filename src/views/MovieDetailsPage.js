import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  NavLink,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cast from './Cast';
import Reviews from './Reviews';
import MovieDetails from '../components/MovieDetails';
import MoviesAPI from '../services/move-api';

const moviesearch = new MoviesAPI();

export default function MovieDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesearch.searchQuery = `movie/${movieId}`;
    moviesearch.search().then(setMovie);
  }, []);

  const onBackButtonClick = () => {
    console.log(history);
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>
        {location?.state?.from?.label ?? 'Go Back'}
      </button>
      <h2>Movie Details Page - детальная информация о фильме ...</h2>
      {movie && <MovieDetails movie={movie} />}

      <NavLink exact to={`${url}/cast`}>
        Cast
      </NavLink>
      <NavLink exact to={`${url}/reviews`}>
        Reviews
      </NavLink>

      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </div>
  );
}
