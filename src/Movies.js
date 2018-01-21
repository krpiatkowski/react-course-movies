import React from "react"

import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"


export default class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedMovie: null
        }
    }

    onSelectMovie = (movie) => {
        this.setState({ selectedMovie: movie })
    }

    onClose = () => {
        this.setState({selectedMovie: null})
    }

    render() {
        return (
            <div id="movies">
                <MovieList onSelectMovie={this.onSelectMovie} />
                {
                    this.state.selectedMovie && (
                        <MovieDetails movie={this.state.selectedMovie} onClose={this.onClose}/>
                    )
                }
            </div>
        )
    }
}