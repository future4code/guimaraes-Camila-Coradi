import React from "react";
import TelaInicial from "./components/TelaInicial";
import TelaMatches from "./components/TelaMatches";
import axios from "axios";
import { Botoes, Principal } from "./components/StyledTelaInicial";
import Button from "@material-ui/core/Button";

import { useState } from "react";

function App() {
  const [tela, setTela] = useState("perfil");

  const escolheTela = () => {
    switch (tela) {
      case "perfil":
        return <TelaInicial onChangeTelaMatches={onChangeTelaMatches} />;
      case "match":
        return <TelaMatches onChangeTelaIncial={onChangeTelaIncial} />;
      default:
        <p> erro </p>;
    }
  };

  const onChangeTelaIncial = () => setTela("perfil");
  const onChangeTelaMatches = () => setTela("match");

  const reset = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/clear"
      )
      .then((res) => setTela("perfil"))
      .catch((err) => console.log(err.response));
  };

  return (
    <Principal>
      <div>
        {escolheTela()}
        <Botoes>
          {" "}
          <Button variant="contained" color="secondary" onClick={reset}>
            {" "}
            Limpar
          </Button>
        </Botoes>
      </div>
    </Principal>
  );
}

export default App;
