import React from "react"
import Axios from "axios"

import Movie from "./Movie"

export default class MovieList extends React.Component {
    movies = []

    componentWillMount(){
        Axios.get("http://localhost:3001/movies").then((res) => {
            this.movies = res.data
            this.forceUpdate()
        })
    }

    onClick(movie) {
        alert(`You just clicked ${movie.title}`)
    }

    render() {
        return (
            <div id="movie-list">
                {
                    this.movies.map(movie => <Movie movie={movie} onClick={() => this.onClick(movie)} key={movie.id}/>)
                }
            </div>
        )
    }
}