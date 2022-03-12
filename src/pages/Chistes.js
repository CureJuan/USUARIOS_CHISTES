import React from "react";
import { useEffect, useState } from "react";

function Chistes() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const url2 = "http://api.icndb.com/jokes";
    const peticion2 = fetch(url2);
    peticion2
      .then(todos => todos.json())
      .then(lectura => {
        lectura.value.map((chistes =>
          setTodos(e => [...e, <div className="caja_chistes" key={chistes.id}> {chistes.id} : <br/> {chistes.joke} </div>]))) 
            
      })
      .catch(() => console.log("Se ha producido un ERROR!!!"));
  }, []);

    return (
      <>
        <h2>Todos los Chistes de Chuck Norris</h2>
            {todos}
        </>
    )
}
export default Chistes;