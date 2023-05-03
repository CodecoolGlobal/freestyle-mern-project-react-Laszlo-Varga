import React, { useState, useEffect } from "react";
import md5 from "md5";
import DisplayCharacters from "./Components/DisplayCharacters";

function MarvelCharacters() {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  
  useEffect(() => {
    const ts = new Date().getTime();
    const privateKey = "666b92b8ab04d83da5d59922b7d5d3611b6bd393";
    const publicKey = "cc0343e9c73f6dead5ff80ea4654be13";
    const hash = md5(ts + privateKey + publicKey);

    const [timestamp, apiKey, hashValue] = [ts, publicKey, hash];

    const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;

    async function getCharacters(url) {
      const charactersRes = await fetch(url);
      const charactersArray = await charactersRes.json();
      setCharacters(charactersArray.data.results);
      console.log(characters);
    }
    getCharacters(url);
  }, []);

  console.log(characters);

  const handleCharacterClick = (character) => {
    setCharacter(character);
    console.log(character);
    Clickhandler(character);
  };

  const Clickhandler = async(character) => {
    await fetch("http://localhost:3000/heroes", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(character),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <DisplayCharacters
        characters={characters}
        handleCharacterClick={handleCharacterClick}
      />
    </div>
  );
}

export default MarvelCharacters;
