import Axios from "axios"

export const getMovies = () => dispatch => {
    Axios.get("http://localhost:3001/movies").then((res) => {
        dispatch({ type: "GET_MOVIES", movies: res.data })
    })
}