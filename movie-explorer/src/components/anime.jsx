import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './card.jsx'
import { Frown } from 'lucide-react'

const Anime = () => {
    const [loading, setLoading] = useState(false)
    const [suggestionAnime, setSuggestionAnime] = useState([])


    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function api(searchQuery) {

        try {
            setLoading(true)
            const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3dc346f0`);
            const jsonData = await data.json()
            console.log(jsonData)
            suggestionAnime.push(jsonData.Search[0])
            setSuggestionAnime(suggestionAnime)
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
                {suggestionAnime.map((movie, index) => (
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
        api("One Piece")
    }, [])
    useEffect(() => {
        api("your name")
    }, [])
    useEffect(() => {
        api("demon slayer")
    }, [])
    // movies.Search?.[randint(0, movies.Search?.length - 1)]?.Title)
    console.log("List of movies:", suggestionAnime)
    function movieCardList() {
        if (suggestionAnime.Search === undefined) {
            return (<div id="no-movies"><Frown /> No anime found</div>);
        }
        else {
            return (suggestionAnime.Search.map((movie, index) => (
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

export default Anime