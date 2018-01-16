import React from "react"

import MovieWithTitle from "./MovieWithTitle"

export default class MovieList extends React.Component {
    onClick(movie) {
        if (this.props.onSelectMovie) {
            this.props.onSelectMovie(movie)
        }
    }

    render() {
        return (
            <div id="movie-list">
                {
                    this.props.movies && (
                        this.props.movies.map(movie =>
                            <MovieWithTitle movie={movie} onClick={() => this.onClick(movie)} key={movie.id} />
                        )
                    )
                }
            </div>
        )
    }
}