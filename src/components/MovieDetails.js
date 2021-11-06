import PropTypes from 'prop-types';
import './MovieDetails.css';
export default function MovieDetails({ movie }) {
  return (
    <div className="movieDetailsCard-container">
      <div className="movieDetailsCard-poster">
        <img
          className="movieDetailsCard-image"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movieDetailsCard-info">
          <p className="movieDetailsCard-title">{movie.title}</p>
          <p className="movieDetailsCard-data">
            Release data {movie.release_date}
          </p>
          <p className="movieDetailsCard-rating">
            Average voite {movie.vote_average}
          </p>
          <ul className="movieDetailsCard-genre_list">
            {movie.genres.map(genre => (
              <li className="movieDetailsCard-genre_item" key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="movieDetailsCard-overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({}),
};
