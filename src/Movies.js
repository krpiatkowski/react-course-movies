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

    render() {
        return (
            <div id="movies">
                <MovieList onSelectMovie={this.onSelectMovie} />
                {
                    this.state.movie && (
                        <MovieDetails selectedMovie={this.state.movie} />
                    )
                }
            </div>
        )
    }
}