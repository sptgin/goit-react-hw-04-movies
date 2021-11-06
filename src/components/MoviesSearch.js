import PropTypes from 'prop-types';
import { useState } from 'react';
import { Notification } from 'react-pnotify';

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
      <input
        value={searchFormInput}
        type="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handlerChange}
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
}

MoviesSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
