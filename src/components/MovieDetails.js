import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {motion} from "framer-motion";
import Youtube from  "react-youtube"

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);
  const Url = '5b0e5846ca807c54fbd77c4694dbbd5f'


  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
     `https://api.themoviedb.org/3/movie/${id}?api_key=${Url}&language=en-US`
      );
      const data = await response.json();
      setMovie(data);
      console.log(data);
      // setVideos(data.results)
    };
    fetchMovie();
  }, [id, Url]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const handleClick = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Url}`
    );
    const data = await response.json();
    const trailer = data.results.find((video) => video.type === 'Trailer');
    if (trailer) {
      setTrailer(trailer.key);
      setShowTrailer(true);
    }
  };

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
        <div className="flex items-end w-full">
          <img className="drop-shadow-lg hover:drop-shadow-2xl rounded-2xl w-2/4 h-96 object-center" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
           <button className="bg-gray-900 p-2 mx-2 h-22 w-96 rounded-md text-white" onClick={handleClick}>Watch Trailer</button>
          <p className="mx-5 items-end flex">{movie.overview}</p>
        </div>
        <div className="">
          {showTrailer && <Youtube videoId={trailer} className="w-[100%]"/> }
        </div>
        
      </motion.div>
    </>
  );
}

export default MovieDetails;
