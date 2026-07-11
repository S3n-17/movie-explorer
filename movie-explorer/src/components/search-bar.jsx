import React from 'react'
import '../style/search-bar.css'
import { Search } from 'lucide-react';
import { CircleX } from 'lucide-react';

const SearchBar = ({ api , searchQuery, setSearchQuery }) => {
    
    function inputchange(elem) {
        console.log(elem.target.value)
        setSearchQuery(elem.target.value)
    }
    
    console.log(searchQuery)
    function cancelSearch() {
        setSearchQuery('')
    }
    return (
        <div id="search-bar">
            <input type="text" placeholder="Search" 
            onChange={inputchange}
            value={searchQuery}/> 
            < CircleX onClick={cancelSearch} />
            <Search onClick={ () => {api(searchQuery.trim())}} />
        </div>

    )
}


export default SearchBar


