import React from "react"
import ReactDOM from "react-dom"
import { MemoryRouter, Route } from "react-router-dom"
import { mount } from 'enzyme';

import MovieList from "./MovieList"

let movies = [{
    "id": 1,
    "title": "Star Wars: Episode V - The Empire Strikes Back",
    "year": 1980,
    "director": "Irvin Kershner",
    "stars": [
        "Mark Hamill",
        "Harrison Ford",
        "Carrie Fisher"
    ],
    "imageUrl": "http://localhost:3001/images/sw_ev.jpg",
    "description": "After the rebels are overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke."
},
{
    "id": 2,
    "title": "Fight Club",
    "year": 1999,
    "director": "David Fincher",
    "stars": [
        "Brad Pitt",
        "Edward Norton",
        "Meat Loaf"
    ],
    "imageUrl": "http://localhost:3001/images/fightclub.jpg",
    "description": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more."
}]

it('can render', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
            <MovieList />
        </MemoryRouter>
        , div);
})

it('can render empty movies', () => {
    const movieList = mount(
        <MemoryRouter>
            <MovieList />
        </ MemoryRouter>)

    expect(movieList.find("#movie-list").children().length).toBe(0)
})

it('can render 2 movies', () => {
    const movieList = mount(
        <MemoryRouter>
            <MovieList movies={movies} />
        </ MemoryRouter>)

    expect(movieList.find("#movie-list").children().length).toBe(2)
})

//Buckle up cowboy
it('can navigate', () => {
    //Hold reference to location :/
    let currentLocation
    const movieList = mount(
        <MemoryRouter>
            {/* Extract location */}
            <Route render={({location}) => {
                currentLocation = location
                return <MovieList movies={movies} />
            }} />
        </ MemoryRouter>
    )
    //Real clicking
    movieList.find("#movie-list a").at(0).props().onClick(new MouseEvent('click'))
    expect(currentLocation.pathname).toBe(`/movie/${movies[0].id}`)
})