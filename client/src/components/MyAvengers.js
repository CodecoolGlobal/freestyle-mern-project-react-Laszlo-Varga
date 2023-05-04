import React, { useState, useEffect } from "react";
import "../App.css"

const MyAvengers = ({handleCloseCharacter }) => {
  const [avengers, setAvengers] = useState([]);

const handleRemoveCharacter =  (avenger) => {
   fetch(`http://localhost:3000/heroes/${avenger._id}`, {
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
    .then((data) => {
      console.log(data);
    return fetch("/heroes")
    })
    .then((response)=>{return response.json()})
    .then((heroes)=>{
      setAvengers(heroes)
    })
  .catch((err) => console.log(err));

  };


  useEffect(() => {
    async function getAvengers() {
      const response = await fetch("/heroes");
      const avengersFetched = await response.json();

      setAvengers(avengersFetched);
    }
    getAvengers();
  }, []);

  return (
    <div>
      {avengers.map((avenger) => (
        <div key={avenger._id}>
          <h3>{avenger.name}</h3>
          <img
            className="mainImage"
            src={`${avenger.thumbnail.path}.${avenger.thumbnail.extension}`}
            alt={avenger.name}
          />
          <div className="buttonContainer">
          <button onClick={() => handleRemoveCharacter(avenger)}>
            Remove from team
          </button>
          </div>
        </div>
      ))}
      <button onClick={handleCloseCharacter}>Back</button>
    </div>
  );
};

export default MyAvengers;
