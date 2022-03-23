import React from "react";
import TelaInicial from "./components/TelaInicial";
import TelaMatches from "./components/TelaMatches";
import axios from "axios";

import { useState } from "react";

function App() {
  const [telaExibida, setTelaExibida] = useState("perfil");

  const escolheTela = () => {
    switch (telaExibida) {
      case "perfil":
        return <TelaInicial onChangeTelaMatches={onChangeTelaMatches} />;
      case "match":
        return <TelaMatches onChangeTelaIncial={onChangeTelaIncial} />;
      default:
        <p> Oppps! </p>;
    }
  };

  const onChangeTelaIncial = () => setTelaExibida("perfil");
  const onChangeTelaMatches = () => setTelaExibida("match");

  const reset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/clear"
      )
      .then((res) => setTelaExibida("perfil"))
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      {escolheTela()}

      <button onClick={reset}> resetar</button>
    </div>
  );
}

export default App;
