import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <>
            <div className='md:flex block lg:justify-around text-md md:text-2xl bg-[#171717] text-white'>
                <Link to="/" className='title items-center flex justify-center text-4xl text-center mx-3 text-primary font-pops'>iMovie</Link>
                <nav className='flex list-none md:text-xl text-center font-pops mt-4 md:my-4 md:items-center md:flex text-center md:gap-24 gap-5 tracking-tightest'>
								<ul className="flex text-center align-center mx-auto gap-6">
                <li>
                <Link to="/Upcoming">Upcoming</Link>
                </li>
                <li>
                <Link to="/Nowplaying">Nowplaying</Link>
                </li>
								</ul>
                </nav>
						</div>
        </>
        
    )
}

export default Navbar
