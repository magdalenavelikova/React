import { useEffect } from "react";

export default function Movie({
  _id,
  title,
  genre,
  numberInStock,
  dailyRentalRate,
  onMovieDelete,
  onMovieSelect,
  selected,
}) {
  useEffect(() => {
    console.log(`Movie ${title} is mounted`);
    return () => {
      console.log(`Movie ${title} is unmounted`);
    };
  }, []);

  useEffect(() => {
    console.log(`Movie ${title} is updated`);
  }, [selected]);

  return (
    <article>
      <h2>Title: {title} </h2>
      {selected && <h4>Selected</h4>}
      <h3>genre: {genre.name}</h3>
      <p>numberInStock: {numberInStock}</p>
      <p>dailyRentalRate: {dailyRentalRate}</p>
      <button onClick={() => onMovieDelete(_id)}> Delete </button>
      <button onClick={() => onMovieSelect(_id)}> Select </button>
    </article>
  );
}
