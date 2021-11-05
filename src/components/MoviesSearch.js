import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MoviesSearch({ onSubmit }) {
  const [searchFormInput, setSearchFornInput] = useState('');

  const handlerChange = event => {
    setSearchFornInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchFormInput.trim() === '') {
      alert('Enter movie name for search.');
    }
    onSubmit(searchFormInput);
    setSearchFornInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <span>Search</span>
      </button>

      <input
        value={searchFormInput}
        type="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handlerChange}
      />
    </form>
  );
}

MoviesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
