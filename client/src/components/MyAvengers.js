import React, { useState, useEffect } from "react";

const MyAvengers = () => {
  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    async function getAvengers (){
      const response = await fetch('????');
      const avengersFetched = await response.json();
    
      setAvengers(avengersFetched);
    } 
    getAvengers();
  }, []);

  return ( 
    {avengers.map((avenger) => (
      <div key={avenger.id}>
        <h3>{avenger.name}</h3>
        <img
          src={`${avenger.thumbnail.path}.${avenger.thumbnail.extension}`}
          alt={avenger.name}
        />
      </div>
    ))}
   );
}
 
export default MyAvengers;