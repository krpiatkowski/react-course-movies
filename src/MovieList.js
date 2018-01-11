import React from "react"

export default class MovieList extends React.Component {
    movies = require("./resources/movies.json")

    onClick(movie) {
        alert(`You just clicked ${movie.title}`)
    }

    render() {
        return (
            <div id="content">
                {
                    this.movies.map(movie => {
                        return <img src={movie.imageUrl} key={movie.id} alt={movie.description} onClick={() => this.onClick(movie)}/>
                    })
                }
            </div>
        )
    }
}