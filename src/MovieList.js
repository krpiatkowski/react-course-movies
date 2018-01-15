import React from "react"

export default class MovieList extends React.Component {
    onClick(movie) {
        if(this.props.onSelectMovie) {
            this.props.onSelectMovie(movie)
        }
    }

    render() {
        return (
            <div id="movie-list">
                {
                    this.props.movies && (
                        this.props.movies.map(movie => {
                            return <img src={movie.imageUrl} key={movie.id} alt={movie.description} onClick={() => this.onClick(movie)} />
                        })    
                    )
                }
            </div>
        )
    }
}