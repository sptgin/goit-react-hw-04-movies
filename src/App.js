import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container';
import MainMenu from './components/MainMenu';
import Footer from './components/Footer';
import Loader from 'react-loader-spinner';

//import HomePage from './views/HomePage';
//import MovieDetailsPage from './views/MovieDetailsPage';
//import MoviesPage from './views/MoviesPage';
//import NotFoundPage from './views/NotFoundPage';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('./views/NotFoundPage'));

export default function App() {
  return (
    <Container>
      <MainMenu />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movies" component={MoviesPage} />
          <Route path="/movie/:movieId" component={MovieDetailsPage} />
          <Route path="" component={NotFoundPage} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
      <Footer />
    </Container>
  );
}
