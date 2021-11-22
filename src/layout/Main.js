import { Component } from "react";
import Movies from "../components/Movies";

class Main extends Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=ae6de1b6&s=matrix')
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}))
		
	}

	render() {
		const {movies} = this.state;
		return(
			<main className="container content">
				{movies.length ? <Movies movies={movies}/> : <h5>Loading...</h5>}
			</main>
		)
	}
}

export default Main;