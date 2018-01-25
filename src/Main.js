import React from "react"
import NavigationBar from "./NavigationBar"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Movies from "./Movies"

import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import * as Actions from "./Actions"

import reducer from "./Reducer"
import MovieDetails from "./MovieDetails";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(logger, thunk))

export default class Main extends React.Component {

    componentWillMount() {
        store.dispatch(Actions.getMovies())
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div id="main">
                        <NavigationBar />
                        <Header title="Movie list" />
                        <Content>
                            <Switch>
                                <Redirect from="/" to="/movies" exact />
                                <Route path="/movies" component={Movies} />
                                <Route path="/movie/:id" component={MovieDetails} />
                            </Switch>
                        </Content>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        )
    }
}