import { Component } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=ae6de1b6&s=matrix')
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}

	updateMoviesFromSearch = (str) => {
		fetch(`http://www.omdbapi.com/?apikey=ae6de1b6&s=${str}`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
	}

	render() {
		const {movies} = this.state;
		return(
			<main className="container content">
				<Search updateMoviesFromSearch={this.updateMoviesFromSearch}/>
				{movies.length ? <Movies movies={movies}/> : <Preloader/>}
			</main>
		)
	}
}

export default Main;