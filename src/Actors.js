import React from "react"
import { Switch, Route } from "react-router-dom"
import Axios from "axios"

import ActorList from "./ActorList"
import Actor from "./Actor"

export default class Actors extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actors: null
        }
    }
    componentWillMount() {
        Axios.get("http://localhost:3001/actors").then((res) => {
            this.setState({
                actors: res.data,
            })
        })
    }

    getActor(name) {
        return this.state.actors.find(actor => actor.name === name)
    }

    render() {
        return (
            this.state.actors ? (
                <div id="actors">
                    <Switch>
                        <Route exact path="/actors">
                            <ActorList actors={this.state.actors} />
                        </Route>
                        <Route path="/actors/:name" render={({ match }) => {
                            let actor = this.getActor(match.params.name)
                            if (actor === undefined) {
                                return "No actor was found with that name"
                            } else {
                                return <Actor actor={actor} />
                            }
                        }} />
                    </Switch>
                </div>
            ) : (
                    <div>Loading...</div>
                )

        )
    }
}