import React from "react"
import Axios from "axios"

export default class MovieList extends React.Component {
    movies = []

    componentWillMount(){
        Axios.get("http://localhost:3001/movies").then((res) => {
            this.movies = res.data
            this.forceUpdate()
        })
    }

    onClick(movie) {
        alert(`You just clicked ${movie.title}`)
    }

    render() {
        return (
            <div id="content">
                {
                    this.movies.map(movie => {
                        return <img src={movie.imageUrl} key={movie.id} alt={movie.description} onClick={() => this.onClick(movie)}/>
                    })
                }
            </div>
        )
    }
}