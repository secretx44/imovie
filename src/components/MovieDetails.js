import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {motion} from "framer-motion";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=5b0e5846ca807c54fbd77c4694dbbd5f&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

    return (
<>
        <motion.div className="max-w-6xl justify-center m-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        >
        <div>
            <h1 className="text-6xl my-5">{movie.title}</h1>
        </div>
            <div className="flex">
                <img className="drop-shadow-lg hover:drop-shadow-2xl rounded-2xl" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                <p className="mx-5 items-end flex">{movie.overview}</p>
                </div>
         </motion.div>
    </>
  );
}

export default MovieDetails;
