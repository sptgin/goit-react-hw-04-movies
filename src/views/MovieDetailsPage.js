import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
  NavLink,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './MovieDetailsPage.css';
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
    history.push(location?.state?.from?.location ?? '/');
  };

  return (
    <div className="movieDetail">
      <div className="movieDetail-card">
        <button
          className="movieDetailGoBackButton"
          type="button"
          onClick={onBackButtonClick}
        >
          {location?.state?.from?.label ?? 'Go Back'}
        </button>
        <h2>Movie Details</h2>
        {movie && <MovieDetails movie={movie} />}
        <ul className="movieDetailNavigation-list">
          <li className="movieDetailNavigation-item">
            <NavLink
              exact
              to={`${url}/cast`}
              className="movieDetailNavigationlink"
              activeClassName="movieDetailNavigationActiveLink"
            >
              Cast
            </NavLink>
          </li>
          <li className="movieDetailNavigation-item">
            <NavLink
              exact
              to={`${url}/reviews`}
              className="movieDetailNavigationlink"
              activeClassName="movieDetailNavigationActiveLink"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Route path={`${path}/cast`}>
        <Cast />
      </Route>
      <Route path={`${path}/reviews`}>
        <Reviews />
      </Route>
    </div>
  );
}
