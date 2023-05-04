import {React} from "react";
 
function DisplayCharacters({characters,handleCharacterClick,}){

return (

 <div>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
        <button onClick={() => handleCharacterClick(character)}>Add to Favorites</button>
      
        </div>
      ))}
    </div>

    )}

export default DisplayCharacters;