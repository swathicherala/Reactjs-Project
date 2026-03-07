const MovieList = ({ movie }) => {
  return (
    <li key={movie.id} className="movie">
      <img src={movie.poster} alt={movie.title} width="200px" height="300px" />
      <p>
        {movie.title} by {movie.director} was released on {movie.year}
      </p>
      <p>Rating: {movie.rating}</p>
    </li>
  );
};

export default MovieList;
