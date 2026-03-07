import { movies } from './data/movies'
import MovieList  from './MovieList'
import './movies.css'

const fetchMovieData = () => {
    return movies
}

const MovieComponent = () => {
    const movieData = fetchMovieData()
    return(
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movie-list">
                {
                    movieData.map((movie)=>(
                        <MovieList key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent