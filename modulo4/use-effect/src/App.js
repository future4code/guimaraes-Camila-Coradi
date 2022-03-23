import axios from "axios";
import React, { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard/PokeCard";
import { Div, Header } from "./components/style";
import Pokebola from "./assets/pokebola-.png";

function App(props) {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokeList(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Div>
      <Header src={Pokebola}></Header>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokeName={pokeName} />}
    </Div>
  );
}

export default App;
