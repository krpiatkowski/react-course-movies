import React from "react"
import Movie from "./Movie"


export default class MovieDetails extends React.Component {
    onClose = () => {
        if(this.props.onClose){
            this.props.onClose()
        }
    }
    render() {
        return (
            <div id="movie-details">
                <div id="movie-details-title">{this.props.movie.title}</div>
                <div id="movie-details-close" onClick={this.onClose}>X</div>
                <Movie movie={this.props.movie} />
                <div id="movie-details-descripton">
                    {this.props.movie.description}
                </div>
            </div>
        )
    }
}