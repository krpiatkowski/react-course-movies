import React from "react"
import Axios from "axios"

import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
import Search from "./Search"


export default class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
            selectedMovie: null
        }
    }

    componentWillMount() {
        Axios.get("http://localhost:3001/movies").then((res) => {
            this.setState({
                movies: res.data,
                filteredMovies: res.data
            })
        })
    }

    onSearch = (text) => {
        let filteredMovies = this.state.movies.filter((movie) => {
            return movie.title.toLowerCase().includes(text.toLowerCase())
        })

        this.setState({
            filteredMovies: filteredMovies
        })
    }

    onSelectMovie = (movie) => {
        this.setState({
            selectedMovie: movie
        })
    }

    onClose = () => {
        this.setState({selectedMovie: null})
    }

    render() {
        return (
            <div id="movies">
                <Search onSearch={this.onSearch}/>
                <MovieList movies={this.state.filteredMovies} onSelectMovie={this.onSelectMovie} />
                {
                    this.state.selectedMovie && (
                        <MovieDetails movie={this.state.selectedMovie} onClose={this.onClose}/>
                    )
                }
            </div >
        )
    }
}