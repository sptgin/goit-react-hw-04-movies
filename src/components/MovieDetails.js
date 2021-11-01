import PropTypes from 'prop-types';
export default function MovieDetails({ movie }) {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.title}</p>
      <p>{movie.release_date}</p>
      <p>{movie.vote_average}</p>
      <ul>
        {movie.genres.map(genre => (
          <li key={genre.id}> {genre.name}</li>
        ))}
      </ul>
      <p>{movie.overview}</p>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({}),
};
