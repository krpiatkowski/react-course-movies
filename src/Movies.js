import React from "react"

import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"


export default class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: null
        }
    }

    didSelectMovie = (movie) => {
        this.setState({ movie: movie })
    }

    render() {
        return (
            <div id="movies">
                <MovieList onSelectMovie={this.didSelectMovie} />
                {
                    this.state.movie && (
                        <MovieDetails movie={this.state.movie} />
                    )
                }
            </div>
        )
    }
}