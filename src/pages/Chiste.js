import React from 'react'
import { useEffect, useState } from "react";

const Chiste = () => {
    const [chistes, setChistes] = useState([]);

    const otro = () => {
      const urlch = "http://api.icndb.com/jokes/random";
      const peticion = fetch(urlch);
      peticion
        .then((chistes) => chistes.json())
        .then((lectura) => setChistes(lectura.value.joke))
        .catch(() => console.log("Se ha producido un ERROR!!!"));
    };
    useEffect(() => {
      otro();
    }, []);
  
  return (
   <>
      <h1>Los Chistes de Chuck Norris</h1>
      {chistes}
      <div>
        <button onClick={otro}>Otro Chiste</button>
      </div>
    </>
  )
}

export default Chiste;
