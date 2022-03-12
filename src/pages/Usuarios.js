import React from "react";
import { useEffect, useState } from "react";
import "../App.css";

const Usuarios = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const url = "http://randomuser.me/api/?results=500";
    const peticion = fetch(url);
    peticion
      .then((datos) => datos.json())
      .then((lectura) => {
        lectura.results.map((persona) =>
         setDatos((e) => [
            ...e,
            <div className="caja_personas" key={persona.id.value}>
                <img className="img" src={persona.picture.large} />
              <div className="caja_persona">
                Nombre: {persona.name.first} {persona.name.last} <br/>
                e-mail: {persona.email}<br/>
                Telefono: {persona.phone}<br />
                id: {persona.id.value}
              </div>
              <button className="button" >+Info</button>
            </div>,
          ])
        );
      })
      .catch(() => console.log("Se ha producido un ERROR!!!"));
  }, []);

  return (
    <>
      <h1>Usuarios: </h1>
      {datos}
    </>
  );
};

export default Usuarios;
