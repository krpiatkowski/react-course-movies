import React from "react"
import { Link } from "react-router-dom"

import Header from "./Header"

export default class ActorList extends React.Component {
    render() {
        return (
            <div>
                <Header title="Actors" />
                <ul>
                    {
                        this.props.actors.map((actor) =>
                            <li key={actor.name}><Link to={`/actors/${actor.name}/movies`}>{actor.name}</Link></li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
