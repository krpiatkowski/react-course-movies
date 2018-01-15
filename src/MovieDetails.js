import React from "react"

export default class MovieDetails extends React.Component {

    render() {
        return (
            <div id="movie-details">
                <div id="movie-details-title">{this.props.movie.title}</div>
                <img src={this.props.movie.imageUrl} alt={this.props.movie.description} />
                <div id="movie-details-descripton">
                    {this.props.movie.description}
                </div>
            </div>
        )
    }
}