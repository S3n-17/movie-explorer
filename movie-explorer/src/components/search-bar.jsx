import React from 'react'
import '../style/search-bar.css'
import { Search } from 'lucide-react';
import { CircleX } from 'lucide-react';

const SearchBar = ({ api }) => {
    function inputchange(elem) {
        console.log(elem.target.value)
        setSearchQuery(elem.target.value)
    }
    const [searchQuery, setSearchQuery] = React.useState('')
    console.log(searchQuery)
    function cancelSearch() {
        setSearchQuery('')
    }
    return (
        <div id="search-bar">
            <input type="text" placeholder="Search a movie" onChange={inputchange} value={searchQuery}/> < CircleX onClick={cancelSearch} />
            {/* <div id="search-icon"> */}
            <Search onClick={ () => api(searchQuery.trim()) } />
            {/* </div> */}
        </div>

    )
}
function search() {
    console.log("search clicked")
    console.log(searchQuery)
    return (searchQuery)
}

// export { search }
export default SearchBar
// const [link, setLink] = React.useState([`http://www.omdbapi.com/?t=${searchQuery}&r&apikey=3dc346f0`])
// function apiLink() {
//     return (link)
// }
// export { search }

