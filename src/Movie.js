import React from "react"

export default class Movie extends React.Component {
    render() {
        let movie = this.props.movie
        return <img className="movie" src={movie.imageUrl} alt={movie.title} onClick={this.props.onClick} />
    }
}