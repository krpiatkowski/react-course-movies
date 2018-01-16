import React from "react"
import NavigationBar from "./NavigationBar"
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"
import Movies from "./Movies"

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <NavigationBar />
                <Header title="Movie list" />
                <Content>
                    <Movies />
                </Content>
                <Footer />
            </div>
        )
    }
}