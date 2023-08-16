import "./App.css";

import MovieList from "./components/MovieList";

function App() {
  const movies = [
    { title: "Test1", year: "2000", cast: ["Me ", "You "] },
    { title: "Test2", year: "2000", cast: ["Me ", "You "] },
    { title: "Test3", year: "2000", cast: ["Me ", "You "] }
  ];
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
