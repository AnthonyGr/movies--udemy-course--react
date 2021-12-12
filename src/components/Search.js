import { useState } from 'react';

const Search = (props) => {
  const { updateMoviesFromSearch = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      updateMoviesFromSearch(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    updateMoviesFromSearch(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          placeholder="search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => updateMoviesFromSearch(search, type)}
          onKeyDown={handleKey}
        />
        <button className="btn search-btn" onClick={() => updateMoviesFromSearch(search, type)}>
          Search
        </button>
        <p>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="all"
              onClick={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </div>
    </div>
  );
};

export default Search;
