import { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.updateMoviesFromSearch(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.updateMoviesFromSearch(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            placeholder="search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onBlur={() =>
              this.props.updateMoviesFromSearch(
                this.state.search,
                this.state.type
              )
            }
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.updateMoviesFromSearch(
                this.state.search,
                this.state.type
              )
            }
          >
            Search
          </button>
          <p>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="all"
                onClick={this.handleFilter}
                checked={this.state.type === 'all'}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="movie"
                onChange={this.handleFilter}
                checked={this.state.type === 'movie'}
              />
              <span>Movies</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="group1"
                type="radio"
                data-type="series"
                onChange={this.handleFilter}
                checked={this.state.type === 'series'}
              />
              <span>Series</span>
            </label>
          </p>
        </div>
      </div>
    );
  }
}

export default Search;
