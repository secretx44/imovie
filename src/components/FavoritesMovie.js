import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"
import '../index.scss'

function FavoritesMovie() {
  const [movies, setMovies] = useState([]);
  const url =
    "";

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setMovies(movies.results);
  };

  return (
    <div>
      {/* <h1>Movies</h1> */}
          <motion.ul
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .4, delay: 0.5 }}
              className="grid grid-cols-4 gap-24 p-24"
          >
        {movies.map((movie) => (
          <li key={movie.id}>
                <Link to={`/Favorite/${movie.id}`}>
                    <p className="text-center text-md">{movie.title}</p>
                    <div className="box">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    </div>
                  
            </Link>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default FavoritesMovie;
