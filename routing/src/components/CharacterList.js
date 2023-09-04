import { useEffect, useState } from "react";

import CharacterListItem from "./CharacterListItem";
import Navigation from "./Navigation";
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
     <Navigation>
          {characters.map((x) => (
            <CharacterListItem key={x.url} {...x} />
          ))}
  </Navigation>
    </>
  );
}
