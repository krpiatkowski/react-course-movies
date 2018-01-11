import React from "react"

export default class Header extends React.Component {
    render() {
        return (
            <div id="header">{this.props.title}</div>
        )
    }
}