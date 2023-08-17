export default function Movie({
    _id,
  title,
  genre,
  numberInStock,
  dailyRentalRate,
  onMovieDelete,
}) {
  
 
    return (
    
    <article>
      <h2>Title: {title} </h2>
      <h3>genre: {genre.name}</h3>
      <p>numberInStock: {numberInStock}</p>
      <p>dailyRentalRate: {dailyRentalRate}</p>
      <button onClick={()=>onMovieDelete(_id)}> Delete </button>
    </article>
    
    
  );
}
