import React from "react"
import MovieList from "./MovieList"

export default class Content extends React.Component {
    render() {
        return (
            <div id="content">
                <MovieList />
            </div>
        )
    }
}