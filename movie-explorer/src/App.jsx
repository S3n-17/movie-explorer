import { useEffect, useState, useSyncExternalStore } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './style/App.css'
import Navbar from './components/navbar.jsx'
import MovieCard from './components/card.jsx'
import { Search } from 'lucide-react'
import SearchBar from './components/search-bar.jsx'
import { Frown } from 'lucide-react'
import { paragraph } from './components/card.jsx'
// import { search } from './components/search-bar.jsx'
import Footer from './components/footer.jsx'
import { heading } from './components/card.jsx'

function App() {
    function randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const [movies, setMovies] = useState({})
    async function api(searchQuery) {
        const data = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3dc346f0`);

        const jsonData = await data.json()
        console.log(jsonData)
        setMovies(jsonData)
        console.log("API fetched")
        return (jsonData)
    }
    useEffect(() => {
        api("harry potter")
        api("lord of the rings")
        api("the hobbit")
        api("the matrix")
        api("interstellar")
        api("batman")
        api("spider-man")
        api("avengers")
    }, [])
    // movies.Search?.[randint(0, movies.Search?.length - 1)]?.Title)
    console.log("List of movies:", movies)
    function movieCardList() {
        if (movies.Search === undefined) {
            return (<div id="no-movies"><Frown /> No movies found</div>);
        }
        else {
            return (movies.Search.map((movie, index) => (
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

    return (
        <div className="App">
            <Navbar />
            <SearchBar api={api} />
            {heading()}
            <div className="movies">

                {movieCardList()}
            </div>
            {paragraph()}
            <Footer />
        </div>

    )
}

export default App





// async function movieName(searchQuery) {
//     const [link, setLink] = useState([`http://www.omdbapi.com/?t=${searchQuery}&r&apikey=3dc346f0`])
// }
// const data = await fetch(" http://www.omdbapi.com/?t=harry+potter&apikey=3dc346f0")
// const data = await search()