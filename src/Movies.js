import React from "react"
import Axios from "axios"

import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"
import Search from "./Search"

import {
    Route,
    Switch
  } from 'react-router-dom'


export default class Movies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            filteredMovies: [],
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

    getMovie = (id) => {
        return this.state.filteredMovies.find(movie => movie.id === Number(id))
    }

    render() {
        return (
            <div id="movies">
                <Search onSearch={this.onSearch}/>
                <MovieList movies={this.state.filteredMovies} />
                <Switch>
                    <Route path="/movie/:id" render={({history, match}) => {
                        let movie = this.getMovie(match.params.id)

                        if (movie === undefined) {
                            return "No movie with that id was found"
                        } else {
                            return <MovieDetails movie={movie} onClose={() => {
                                history.goBack()
                            }} />
                        }
                    }} />
                </Switch>
            </div >
        )
    }
}