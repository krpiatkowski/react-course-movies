import React from "react"
import { NavLink } from 'react-router-dom'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div id="navigation-bar">
                <ul>
                    <li><NavLink to={'/movies'} key={'movies'}>Movies</NavLink></li>
                    <li><NavLink to={'/actors'} key={'actors'}>Actors</NavLink></li>
                </ul>
            </div>
        )
    }
}