import React from "react"

import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
import Search from "./Search"
import { connect } from "react-redux"

import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom'


const Movies = class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredMovies: props.movies,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.filteredMovies.length === 0) {
            this.setState({ filteredMovies: nextProps.movies })
        }
    }

    onSearch = (text) => {
        let filteredMovies = this.props.movies.filter((movie) => {
            return movie.title.toLowerCase().includes(text.toLowerCase())
        })

        this.setState({
            filteredMovies: filteredMovies
        })
    }

    getMovie = (id) => {
        return this.state.filteredMovies.find(movie => movie.id === Number(id))
    }

    render() {
        return (
            <div id="movies">
                <Search onSearch={this.onSearch} />
                <MovieList movies={this.state.filteredMovies} />
            </div >
        )
    }
}

export default withRouter(connect(state => { return { movies: state.movies } })(Movies))