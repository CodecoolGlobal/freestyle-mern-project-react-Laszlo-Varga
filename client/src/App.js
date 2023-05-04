import React, { useState, useEffect } from "react";
import md5 from "md5";
import DisplayCharacters from "./Components/DisplayCharacters";
import SearchBar from "./Components/SearchBar";
import DisplaySingleCharacter from "./Components/DisplaySingleCharacter";
import MyAvengers from "./Components/MyAvengers";
import Animation from "./Components/Animation"
import './styles/app.css';

function MarvelCharacters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [character, setCharacter] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showCharacter, setShowCharacter] = useState(false);
  const [myAvengersClicked, setMyAvengersClicked] = useState(false);
  const [ isAnimation,setIsAnimation ] = useState(true);
  const [showMyAvengers, setShowMyAvengers] = useState(false);



    const handleCharacterInfoClick = (character) => {
      setCharacter(character);
      setShowCharacter(true);
    };

  useEffect(() => {
  
     const ts = new Date().getTime();
     const privateKey = "666b92b8ab04d83da5d59922b7d5d3611b6bd393";
     const publicKey = "cc0343e9c73f6dead5ff80ea4654be13";
     const hash = md5(ts + privateKey + publicKey);

     const [timestamp, apiKey, hashValue] = [ts, publicKey, hash];

  const url = `https://gateway.marvel.com:443/v1/public/characters?limit=60&ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;
  async function getCharacters(url) {
    const charactersRes = await fetch(url);
    const charactersArray = await charactersRes.json();
    setCharacters(charactersArray.data.results);
  }
  getCharacters(url);
},[]) 
  useEffect(() => {
    const ts = new Date().getTime();
    const privateKey = "666b92b8ab04d83da5d59922b7d5d3611b6bd393";
    const publicKey = "cc0343e9c73f6dead5ff80ea4654be13";
    const hash = md5(ts + privateKey + publicKey);

    const [timestamp, apiKey, hashValue] = [ts, publicKey, hash];

 

   

    async function getCharactersByNameStart(urlOfNames) {
      const charactersRes = await fetch(urlOfNames);
      const charactersArray = await charactersRes.json();
      setFilteredCharacters(charactersArray.data.results);
    }

    if (searchInput.length > 0) {
      const urlOfnames = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchInput}&limit=10&ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}`;
      getCharactersByNameStart(urlOfnames);
    } else {
      setFilteredCharacters(characters);
    }
  }, [searchInput,characters]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

const characterInfoClick = ()=>{ 
   setShowCharacter(true); 
 }

  const handleCharacterClick = (character) => {
    setCharacter(character);
 
    console.log(character);
    clickHandler(character);
  };


const handleInfoButton =()=>{
  setShowCharacter(true);
}


  const clickHandler = async (character) => {
    try {
      const response = await fetch("http://localhost:3000/heroes", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
 
    } catch (err) {
      console.log(err);
    }
  };

   
  const handleRemoveCharacter = async (avenger) => {
    console.log(avenger);
    await fetch(`http://localhost:3000/heroes/${avenger._id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(avenger),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  const handleCloseCharacter = () => {
    setShowCharacter(false);
 setShowMyAvengers(false)
  };
const handleMyAvengersButtonClick = () => {
  setShowMyAvengers(!showMyAvengers);
};

setTimeout(()=>{ 
setIsAnimation(false);
 },7000)

  return (
    <div>
      {isAnimation && (
        <div>
          <Animation />
        </div>
      )}

      {!showCharacter && !isAnimation && !showMyAvengers && (
        <div>
          <SearchBar
            placeholder="Search here"
            handleChange={handleChange}
            searchInput={searchInput}
          />
          <button onClick={handleMyAvengersButtonClick}>My Avengers</button>
        </div>
      )}

      {!showCharacter && !isAnimation && !showMyAvengers && (
        <DisplayCharacters
          characters={filteredCharacters}
          handleCharacterClick={handleCharacterClick}
          handleCharacterInfoClick={handleCharacterInfoClick}
        />
      )}

      {!showCharacter && !isAnimation && showMyAvengers && (
        <MyAvengers handleRemoveCharacter={handleRemoveCharacter} 
        handleCloseCharacter={handleCloseCharacter}/>
      )}

      {showCharacter && !isAnimation && (
        <DisplaySingleCharacter
          character={character}
          characterInfoClick={clickHandler}
          handleCharacterClick={handleCharacterClick}
          handleCloseCharacter={handleCloseCharacter}
        />
      )}
    </div>
  );
}


export default MarvelCharacters;
