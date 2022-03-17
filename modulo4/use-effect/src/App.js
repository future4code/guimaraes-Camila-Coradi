import axios from "axios";
import React,{useState, useEffect}from "react";
import PokeCard from "./components/PokeCard/PokeCard"
import {Div} from"./components/style"





function App() {

  const [ pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState('')

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  }

  useEffect(()=>{
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
    })

 
  return (
    <Div >
      <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
      
    </Div>
  );
}

export default App;
