import React from "react"
import Movie from "./Movie"

import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

const MovieDetails = class extends React.PureComponent {
    onClose = () => this.props.history.goBack()

    render() {
        let movie = this.props.movies.find(movie => movie.id === Number(this.props.match.params.id))

        if (movie) {
            return (
                <div id="movie-details">
                    <div id="movie-details-title">{movie.title}</div>
                    <div id="movie-details-close" onClick={this.onClose}>X</div>
                    <Movie movie={movie} />
                    <div id="movie-details-descripton">
                        {movie.description}
                    </div>
                </div>
            )
        } else {
            return null
        }

    }
}

export default withRouter(connect(state => { return { movies: state.movies } })(MovieDetails))