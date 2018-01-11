import React from "react"
import NavigationBar from "./NavigationBar"
import MovieList from "./MovieList"
import Footer from "./Footer"
import Header from "./Header"

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <NavigationBar />
                <Header title="Movie list" />
                <MovieList />
                <Footer />
            </div>
        )
    }
}