import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './card.jsx'
import { Frown } from 'lucide-react'
import {movie} from './card.jsx'

const Movie = ({showOne, showTwo, showThree, val}) => {
    const [loading, setLoading] = useState(false)
    const [suggestionMovie, setSuggestionMovie] = useState([])


    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function api(searchQuery) {

        try {
            setLoading(true)
            const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3dc346f0`);
            const jsonData = await data.json()
            console.log(jsonData)
            setSuggestionMovie(prev => [...prev, jsonData.Search[0]]);
            // setSuggestionMovie(suggestionMovie)
            console.log("API fetched")
            return (jsonData)
        } catch (error) {
            console.error("Error fetching API data:", error)
        } finally {
            setLoading(false)
        }
    }
    function suggestion({ api }) {
        return (
            <>
                {suggestionMovie.map((movie, index) => (
                <MovieCard
                    key={index}
                    poster={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                />
                ))}
            </>
        )

    }
    useEffect(() => {
        api(showOne)
    }, [])
    useEffect(() => {
        api(showTwo)
    }, [])
    useEffect(() => {
        api(showThree)
    }, [])
    // movies.Search?.[randint(0, movies.Search?.length - 1)]?.Title)
    console.log("List of movies:", suggestionMovie)
    function movieCardList() {
        if (suggestionMovie.length === 0) {
            return (<div id="no-movies"><Frown /> No {val} found</div>);
        }
        else {
            return (suggestionMovie.map((movie, index) => (
                <MovieCard
                    key={index}
                    poster={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                />
            )));
        }
    }
    if (loading) {
        return (
            <div className="loading">
                <div className="loader"><p>Loading...</p></div>
            </div>
        );
    }
    return (
        <div className="App">
            
            <div className="movies">
                {movieCardList()}
            </div>
        </div>

    )
}

export default Movie
