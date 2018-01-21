import React from "react"
import { Link } from "react-router-dom"
import Movie from "./Movie"


export default class MovieDetails extends React.Component {
    render() {
        return (
            <div id="movie-details">
                <div id="movie-details-title">{this.props.movie.title}</div>
                <div id="movie-details-close"><Link to={this.props.onClose}>X</Link></div>
                <Movie movie={this.props.movie} />
                <div id="movie-details-descripton">
                    {this.props.movie.description}
                </div>
            </div>
        )
    }
}