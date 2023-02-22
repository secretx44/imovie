import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
function Upcoming() {
    const [movies, setMovies] = useState([]);
    const url =
    "https://api.themoviedb.org/3/movie/upcoming?api_key=5b0e5846ca807c54fbd77c4694dbbd5f&language=en-US&page=1";
    useEffect(() => {
    fetchPopular();
  },[]);
const fetchPopular = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results)
  };

    return (
        <>
        <div>
                <h1>Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {movies.map((movie) => (
                        <div key={movie.id} className="mt-8">
                          <Link to={`/Upcoming/${movie.id}`}>
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.title} />
                            </Link>
                            <div className="mt-2">
                            <h3 className="text-lg mt-2">{movie.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </>
    )
}

export default Upcoming;
