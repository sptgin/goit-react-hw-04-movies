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
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route path="/moviedetailspage" exact>
          <MovieDetailsPage />
        </Route>
        <Route path="/moviedetailspage/reviews">
          <Reviews />
        </Route>
        <Route path="/moviedetailspage/cast">
          <Cast />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Container>
  );
}
