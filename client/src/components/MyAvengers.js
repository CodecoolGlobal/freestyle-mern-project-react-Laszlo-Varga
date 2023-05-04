import React, { useState, useEffect } from "react";

const MyAvengers = ({ handleRemoveCharacter }) => {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    async function getAvengers() {
      const response = await fetch("/heroes");
      const avengersFetched = await response.json();
console.log(avengersFetched)
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
          <button onClick={() => handleRemoveCharacter(avenger)}>Remove from team</button>
        </div>
      ))}
    </div>
  );
};

export default MyAvengers;
