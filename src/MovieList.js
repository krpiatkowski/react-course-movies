import React from "react"
import { Link } from 'react-router-dom'

import MovieWithTitle from "./MovieWithTitle"

export default class MovieList extends React.Component {
    render() {
        return (
            <div id="movie-list">
                {
                    this.props.movies && (
                        this.props.movies.map(movie => {
                            return (
                                <Link to={`/movie/${movie.id}`} key={movie.id}>
                                    <MovieWithTitle movie={movie} />
                                </Link>
                            )
                        })
                    )
                }
            </div>
        )
    }
}