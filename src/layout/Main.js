import { useState, useEffect } from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateMoviesFromSearch = (str, type = 'all') => {
    setLoading(true);
    let link = '';
    if (type === 'all') {
      link = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`;
    } else {
      link = `https://www.omdbapi.com/?apikey=${API_KEY}&type=${type}&s=${str}`;
    }
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container content">
      <Search updateMoviesFromSearch={updateMoviesFromSearch} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export default Main;
