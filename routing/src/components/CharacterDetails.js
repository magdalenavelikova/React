import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
const baseUrl = "https://swapi.dev/api/people";
export default function CharacterDetails({ name }) {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`${baseUrl}/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
      });
  }, [characterId]);
  const onBackButtonClick = () => {
    // navigate(-1);
    navigate("/characters");
  };

  return (
    <div>
      <h1>Character Details</h1>
      <h2>{character.name}</h2>
      <p>
        <span>height: {character.height}</span>
        <br />
        <span>mass: {character.mass}</span>
        <br />
        <span>hair_color: {character.hair_color}</span>
        <br />
        <span> skin_color: {character.skin_color}</span>
      </p>
      <button onClick={onBackButtonClick}>Back</button>
      <Navigation>
       <li> <Link to='films'>Films</Link></li>
       <li>  <Link to='vehicles'>Vehicles</Link></li>
       <li><Link to='starships'>Starships</Link></li>

       </Navigation>
      <Routes>
      <Route path='/films' element={<h5>Films </h5>}/>
      <Route path='/vehicles' element={<h5>Vehicles </h5>}/>
      <Route path='/starships' element={<h5>Starships </h5>}/>
      </Routes>
    </div>
  );
}
