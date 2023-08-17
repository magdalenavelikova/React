export default function Movie({
  title,
  genre,
  numberInStock,
  dailyRentalRate,
}) {
  return (
    
    <article>
      <h2>Title: {title} </h2>
      <h3>genre: {genre.name}</h3>
      <p>numberInStock: {numberInStock}</p>
      <p>dailyRentalRate: {dailyRentalRate}</p>
    </article>
    
  );
}
