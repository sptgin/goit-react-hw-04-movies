import { Link } from 'react-router-dom';

export default function MoviesList({ movies }) {
  return (
    <div>
      {movies && (
        <ul>
          {movies.results.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{movie.overview}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
