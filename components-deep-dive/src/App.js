import { movies as movieData } from "./movies/movies";
import MovieList from "./components/MovieList";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(movieData);
  const onMovieDelete = (_id) => {
    setMovies((state) => state.filter((x) => x._id !== _id));
  };

  return (
    <div className="App">
      <h1>Movie Collection</h1>
      <MovieList movies={movies} onMovieDelete={onMovieDelete} />
    </div>
  );
}

export default App;
