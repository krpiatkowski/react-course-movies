import React from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./Header"
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails"

export default class Actor extends React.Component {

    getMovies = (id) => {
        return this.props.actor.movies.find(movie => movie.id === id)
    }

    render() {
        return (
            <Switch>
                <Route exact path="/actors/:name/movies">
                    <div>
                        <Header title={this.props.actor.name} />
                        <MovieList movies={this.props.actor.movies} />
                    </div>
                </Route>
                <Route path="/actors/:name/movies/:id" render={({ history, match }) => {
                    let movie = this.getMovie(match.params.id)
                    if (movie === undefined) {
                        return "No movie with that id was found"
                    } else {
                        return <MovieDetails movie={movie} onClose={() => {
                            history.goBack()
                        }} />
                    }
                }} />
                }} />
            </Switch>
        )
    }
}
