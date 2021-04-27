import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='row'>
            <h1 className='col-md-4'>Google Book Gallery</h1>
            <Link 
            to='/'
            className='col-md-3'>
                Search Library
            </Link>
            <Link 
            to='/saved'
            className='col-md-3'>
                Saved Books
            </Link>
        </nav>
    )
}

export default Nav;