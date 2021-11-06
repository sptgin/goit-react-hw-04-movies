import PropTypes from 'prop-types';
import './MovieCast.css';
import noPersonImage from '../images/person.png';

export default function MovieCast({ cast }) {
  return (
    <div className="movieCast">
      <ul className="movieCast-list">
        {cast.cast.map(person => (
          <li className="movieCast-list_item" key={person.id}>
            <div className="movieCast-card">
              <img
                className="movieCast-image"
                src={
                  person.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${person.profile_path}`
                    : noPersonImage
                }
              />
              <p className="movieCast-name">{person.name}</p>
              <p className="movieCast-character">as {person.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.shape({}),
};
