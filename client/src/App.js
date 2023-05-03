import React, { useState, useEffect } from "react";
import md5 from "md5";

function MarvelCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const ts = new Date().getTime(); // current timestamp;
    const privateKey = "666b92b8ab04d83da5d59922b7d5d3611b6bd393";
    const publicKey = "cc0343e9c73f6dead5ff80ea4654be13"; 
    const hash = md5(ts + privateKey + publicKey);

    const [timestamp, apiKey, hashValue] = [ts, publicKey, hash];

    const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;

    async function getCharacters(url) {
      const charactersRes = await fetch(url);
      const charactersArray = await charactersRes.json();
      setCharacters(charactersArray.data.results);
      
    }
    getCharacters(url);
    console.log(characters);
  }, []);

  return (
    <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
}

export default MarvelCharacters;