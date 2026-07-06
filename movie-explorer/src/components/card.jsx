import React from 'react'
import '../style/cards.css'
import SearchBar from './search-bar.jsx'

const MovieCard = ({ poster, title, year, type}) => {
  return (
    <span className="movie-card">
      <div id="poster">
        <img src={poster} alt={title} />
        {/* <div id="rank">{Rank}</div> */}
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
// const paragraph = () => {
//   return (<h1>#Trending :</h1>)
// }
export default MovieCard
// export { paragraph }



