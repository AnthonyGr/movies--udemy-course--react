import { Component } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  updateMoviesFromSearch = (str, type = 'all') => {
    this.setState({ loading: true });
    let link = '';
    if (type === 'all') {
      link = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`;
    } else {
      link = `https://www.omdbapi.com/?apikey=${API_KEY}&type=${type}&s=${str}`;
    }
    fetch(link)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content">
        <Search updateMoviesFromSearch={this.updateMoviesFromSearch} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
