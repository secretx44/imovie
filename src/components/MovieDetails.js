import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import {AiFillHeart} from 'react-icons/ai'
import {BsStarFill} from 'react-icons/bs'
import Youtube from "react-youtube"

function MovieDetails() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)
  const Url = "5b0e5846ca807c54fbd77c4694dbbd5f"

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${Url}&language=en-US`
      )
      const data = await response.json()
      setMovie(data)
      console.log(data)
    }
    fetchMovie()
  }, [id, Url])

  if (!movie) {
    return (
      <div className="flex justify-center mx-auto text-center">Loading...</div>
    )
  }

  const handleClick = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Url}`
    )
    const data = await response.json()
    const trailer = data.results.find((video) => video.type === "Trailer")
    if (trailer) {
      setTrailer(trailer.key)
      setShowTrailer(true)
    }
  }

  return (
    <>
      <motion.div
        className="md:container md:mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >	
				<div className="inline-block text-center md:text-start my-4">
					<p className="my-4 font-bold md:text-2xl">{movie.title}</p>
					<div className="md:flex items-center">
					 <img
            className="mx-auto object-center w-54 drop-shadow-lg hover:drop-shadow-2xl rounded-2xl h-96"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
					<div className="block items-end content-end w-full">
					<div className="flex my-5 text-center justify-center md:justify-start mx-auto md:mx-10">
          <p>{movie.release_date}</p>
          <p className="flex items-center mx-4 tracking-wide"><BsStarFill/>{movie.vote_average}</p>
          <p className="flex items-center mx-4 tracking-wide"><AiFillHeart/>{movie.vote_count}</p>
					</div>
					<div className="inline-block p-5 md:flex md:flex-col">
					<h2 className="font-bold mx-5 text-sm md:text-xl md:items-end">Overview:</h2>
					 <p className="flex content-end mx-5">{movie.overview}</p>
					   <button
            className="content-end mx-auto h-12 p-2 md:mx-6 text-white bg-gray-900 rounded-md w-36 hover:opacity-75"
            onClick={handleClick}
          >
            Watch Trailer
          </button> 
					 </div>
					
					</div>
					
					</div>
				</div>
       
        <div className="">
          {showTrailer && <Youtube videoId={trailer} className="w-[100%]" />}
        </div>
      </motion.div>
    </>
  )
}

export default MovieDetails
