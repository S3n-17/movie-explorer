import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './card.jsx'
import { Frown } from 'lucide-react'

const Drama = () => {
    const [loading, setLoading] = useState(false)
    const [suggestionDrama, setSuggestionDrama] = useState([])


    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function api(searchQuery) {

        try {
            setLoading(true)
            const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3dc346f0`);
            const jsonData = await data.json()
            console.log(jsonData)
            suggestionDrama.push(jsonData.Search[0])
            setSuggestionDrama(suggestionDrama)
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
                {suggestionDrama.map((movie, index) => (
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
        api("when i fly towards you")
    }, [])
    useEffect(() => {
        api("when life gives you tangerines")
    }, [])
    useEffect(() => {
        api("the jewel of section e")
    }, [])
    // movies.Search?.[randint(0, movies.Search?.length - 1)]?.Title)
    console.log("List of movies:", suggestionDrama)
    function movieCardList() {
        if (suggestionDrama.Search === undefined) {
            return (<div id="no-movies"><Frown /> No dramas found</div>);
        }
        else {
            return (suggestionDrama.Search.map((movie, index) => (
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

export default Drama