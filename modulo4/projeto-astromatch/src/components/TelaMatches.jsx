import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Botoes } from "./StyledTelaInicial";
import {
  DivMatchPrincipal,
  DivMatchSecundaria,
  Name,
  Age,
  Photo,
} from "./StyledTelaMatches";

function TelaMatches(props) {
  const [listaMatches, setListaMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/matches"
      )
      .then((res) => setListaMatches(res.data.matches))
      .catch((err) => console.log(err));
  };

  useEffect(() => getMatches(), []);

  return (
    <div>
      {listaMatches.map((match) => {
        return (
          <h2>
            <DivMatchPrincipal>
              <DivMatchSecundaria>
                <Photo src={match.photo} />
                <Name>{match.name}</Name>
                <Age>{match.age}</Age>
              </DivMatchSecundaria>
            </DivMatchPrincipal>
          </h2>
        );
      })}
      <br />
      <Botoes>
        <Button
          Button
          variant="contained"
          color="primary"
          onClick={props.onChangeTelaIncial}
        >
          Voltar
        </Button>
      </Botoes>
    </div>
  );
}

export default TelaMatches;
