import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import like from "../assets/like.png";
import deslike from "../assets/deslike.png";

function TelaInicial(props) {
  const [perfil, setPerfil] = useState({});

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/person"
      )
      .then((res) => {
        setPerfil(res.data.profile);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const chosePerson = () => {
    const body = {
      id: perfil.id,
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/choose-person",
        body
      )
      .then((res) => {
        getProfiles();
      })
      .catch((err) => console.log(err.response));
  };

  const deslikePerson = () => {
    const body = {
      id: perfil.id,
      choice: false,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/choose-person",
        body
      )
      .then((res) => {
        getProfiles();
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h1>astromatch</h1>
      <div>
        <img src={perfil.photo} />
      </div>
      <br />
      <div>
        {perfil.name}, {perfil.age}
      </div>
      <div>{perfil.bio}</div>

      <div>
        <button onClick={chosePerson}>
          <img src={like} />
        </button>
        <button onClick={deslikePerson}>
          <img src={deslike} />
        </button>
        <br />
        <button onClick={props.onChangeTelaMatches}>Ver matches </button>
      </div>
    </div>
  );
}

export default TelaInicial;
