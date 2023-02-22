import React from 'react'
import SearchBar from './SearchBar'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <>
            <div className='flex justify-center text-center text-2xl'>
                <h1 className='items-center flex text-center mx-3'>iMovie</h1>
                <SearchBar/>
            </div>
                <nav className='flex list-none font-pops justify-around tracking-tightest'>
                <li>
                <Link to="/">Popular Movies</Link>
                </li>
                <li>
                <Link to="/Upcoming">Upcoming</Link>
                </li>
                <li>
                <Link to="/Favorites">Favorites</Link>
                </li>
                </nav>
        </>
        
    )
}

export default Navbar
