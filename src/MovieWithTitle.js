import React from "react"
import Movie from "./Movie"

export default class MovieWithTitle extends React.Component {
    render() {
        return (
            <div className="movie-with-title" onClick={this.props.onClick}>
                <Movie movie={this.props.movie} />
                <div>{this.props.movie.title}</div>
            </div>
        )
    }
}