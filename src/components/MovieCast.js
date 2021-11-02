import PropTypes from 'prop-types';
export default function MovieCast({ cast }) {
  return (
    <div>
      <ul>
        {cast.cast.map(person => (
          <li key={person.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${person.profile_path}`}
              alt={person.name}
            />
            {person.name} as {person.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieCast.propTypes = {
  cast: PropTypes.shape({}),
};
