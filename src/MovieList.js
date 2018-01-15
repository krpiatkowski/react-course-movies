import React from "react"
import Axios from "axios"

export default class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies : []
        }
    }

    componentWillMount() {
        Axios.get("http://localhost:3001/movies").then((res) => {
            this.setState({
                movies: res.data
            })
        })
    }

    onClick(movie) {
        if(this.props.onSelectMovie) {
            this.props.onSelectMovie(movie)
        }
    }

    render() {
        return (
            <div id="movie-list">
                {
                    this.state.movies.map(movie => {
                        return <img src={movie.imageUrl} key={movie.id} alt={movie.description} onClick={() => this.onClick(movie)} />
                    })
                }
            </div>
        )
    }
}