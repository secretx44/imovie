import React from 'react'

function SearchBar() {
    return (
        <div>
            <input type='text'
                placeholder='Search for a movie'
                className='w-full px-2 py-2 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700
                 focus:border-gray-500 focus:outline-none focus:shadow-outline'
            />
        </div>
    )
}

export default SearchBar
