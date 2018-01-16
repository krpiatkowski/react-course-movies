import React from "react"
import NavigationBar from "./NavigationBar"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

import { BrowserRouter as Router } from 'react-router-dom'

export default class Main extends React.Component {
    render() {
        return (
            <Router>
                <div id="main">
                    <NavigationBar />
                    <Header title="Movie list" />
                    <Content/>
                    <Footer />
                </div>
            </Router>
        )
    }
}