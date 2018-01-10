import React from "react"
import NavigationBar from "./NavigationBar"
import MovieList from "./MovieList"
import Footer from "./Footer"



export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <NavigationBar id="navigationBar" />
                <h1 id="main-header">{this.props.title}</h1>
                <MovieList />
                <Footer />
            </div>
        )
    }
}