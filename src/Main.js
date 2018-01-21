import React from "react"

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import NavigationBar from "./NavigationBar"
import Content from "./Content"
import Footer from "./Footer"
import Movies from "./Movies"
import Actors from "./Actors"


export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            movies: null,
            actors: null
        }
    }

    render() {
        return (
            <Router>
                <div id="main">
                    <NavigationBar />
                    <Content>
                        <Switch>
                            <Redirect exact path="/" to="/movies" />
                            <Route path="/movies">
                                <Movies movies={this.state.movies} />
                            </Route>
                            <Route path="/actors">
                                <Actors actors={this.state.actors} />
                            </Route>
                        </Switch>
                    </Content>
                    <Footer />
                </div>
            </Router >
        )
    }
}