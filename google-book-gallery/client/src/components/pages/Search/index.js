import React, { useState } from 'react';
import SearchBooks from '../../SearchBooks.js';
import SearchResults from '../../SearchResults.js/index.js';
import './search.css';


const Search = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    const handleInputChange = event => {
        setSearch(event.target.value);
        console.log(search);
    };

    return (
        <div className='search-page'>
            <div className='row'>
                <SearchBooks 
                handleInputChange={handleInputChange}/>
            </div>
            <div className='row'>
                <SearchResults />
            </div>
        </div>
    )
}

export default Search;