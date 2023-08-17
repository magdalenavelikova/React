import React from "react";
import Movie from "./Movie";

export default function MovieList({ movies }) {
  /*{
     const firstMovie = movies[0];
 return (
    <div>
      }  <Movie
        title={movies[0].title}
        genre={movies[0].genre}
        numberInStock={movies[0].numberInStock}
        dailyRentalRate={movies[0].dailyRentalRate}
  />
      <Movie {...firstMovie} />
</div>
  ); 

   let movieElements = [];
    for (const movie of movies) {
      //  movieElement.push(React.createElement(Movie,movie));
      movieElements.push(
        <li>
          <Movie {...movie} />
        </li>
      );
    }

    return <ul>{movieElements}</ul>;}*/

  /*{ let movieList = movies.map((movie, index) => (
    <li>
      <Movie  {...movie} />
    </li>
  ));}*/
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie._id}>
          <Movie {...movie} />
        </li>
      ))}
    </ul>
  );
}
