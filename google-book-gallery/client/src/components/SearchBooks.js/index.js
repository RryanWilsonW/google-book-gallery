import React from 'react';

const SearchBooks = ({ handleInputChange }) => {
    return (
        <form className=' col-md-8 search-form'>
            <h2>Search for a book!</h2>
            <input
            onChange={handleInputChange}>
            </input>
            <button>Search</button>
        </form>
    )
}

export default SearchBooks;