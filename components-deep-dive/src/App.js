import {movies} from './movies/movies';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <h1>Movie Collection</h1>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
