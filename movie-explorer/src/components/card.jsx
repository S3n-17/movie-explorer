import React from 'react'
import '../style/cards.css'
import SearchBar from './search-bar.jsx'
import { ChevronRight } from 'lucide-react'

const MovieCard = ({ poster, title, year, type }) => {
  return (
    <span className="movie-card">
      <div id="poster" style={{ backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>
      <div id="movie-info">
        <br></br>
        <div id="title">{title}</div>
        <hr></hr>
        <div id="year">{year}</div>
        <hr></hr>
        <div id="type">{type}</div>
      </div>
    </span>
  )
}
const paragraph = () => {
  return (
    <>
    <h1>#More Movies <ChevronRight /></h1>
    <h4>Click on the arrow to see more movies</h4>
    </>
  )
}
const movie = (show) => {
  return (
    <>
    <h1>#{show} :</h1>
    </>
  )
}
const webseries = () => {
  return (
    <>
    <h1>#Web Series you might like</h1>
    </>
  )
}
const cartoon = () => {
  return (
    <>
    <h1>#Cartoons you might like</h1>
    </>
  )
}
const drama = () => {
  return (
    <>
    <h1>#Dramas you might like</h1>
    </>
  )
}
const anime = () => {
  return (
    <>
    <h1>#Anime you might like</h1>
    </>
  )
}
export default MovieCard
export { paragraph, movie, webseries, cartoon, drama, anime }



