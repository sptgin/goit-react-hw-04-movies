import { Switch, Route } from 'react-router-dom';
import Cast from './views/Cast';
import Container from './components/Container';
import MainMenu from './components/MainMenu';
import HomePage from './views/HomePage';
import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import Reviews from './views/Reviews';
import NotFoundPage from './views/NotFoundPage';

export default function App() {
  return (
    <Container>
      <MainMenu />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>
        <Route path="/movie/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movie/:movieId/reviews">
          <Reviews />
        </Route>
        <Route path="/movie/:movieId/cast">
          <Cast />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
