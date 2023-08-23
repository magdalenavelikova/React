
import { useEffect, useState } from "react";
import styles from './Navigation.module.css';
import CharacterListItem from "./CharacterListItem";
const baseUrl = "https://swapi.dev/api/people";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      });
  }, []);
  return (
    <>
      <h1>Star Wars Characters</h1>
      <nav className={styles.navigation}>
      <ul>
        {characters.map((x) => (
       
           <CharacterListItem key={x.url}{...x}/>
          
        ))}
      </ul>
      </nav>
    </>
  );
}
