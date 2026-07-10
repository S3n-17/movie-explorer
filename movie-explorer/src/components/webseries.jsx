import React from 'react'
import { useEffect, useState } from 'react'
import MovieCard from './card.jsx'
import { Frown } from 'lucide-react'

const Webseries = () => {
    const [loading, setLoading] = useState(false)
    const [suggestionWebseries, setSuggestionWebseries] = useState([])


    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    async function api(searchQuery) {

        try {
            setLoading(true)
            const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3dc346f0`);
            const jsonData = await data.json()
            console.log(jsonData)
            suggestionWebseries.push(jsonData.Search[0])
            setSuggestionWebseries(suggestionWebseries)
            console.log("API fetched")
            return (jsonData)
        } catch (error) {
            console.error("Error fetching API data:", error)
        } finally {
            setLoading(false)
        }
    }
    // function suggestion({ api }) {
    //     return (
    //         <>
    //             {suggestionWebseries.map((movie, index) => (
    //             <MovieCard
    //                 key={index}
    //                 poster={movie.Poster}
    //                 title={movie.Title}
    //                 year={movie.Year}
    //                 type={movie.Type}
    //             />
    //             ))}
    //         </>
    //     )

    // }
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
    console.log("List of movies:", suggestionWebseries)
    function movieCardList() {
        if (suggestionWebseries.length() === 0) {
            return (<div id="no-movies"><Frown /> No web series found</div>);
        }
        else {
            return (suggestionWebseries.forEach((i) => map((movie, index) => (
                <MovieCard
                    key={index}
                    poster={movie.Poster}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                />
            ))));
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

export default Webseries