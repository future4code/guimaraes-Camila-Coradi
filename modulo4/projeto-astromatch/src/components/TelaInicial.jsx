import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Header,
  PerfilFoto,
  Botoes,
  Info,
  Bio,
  ImgCheck,
  ImgClose,
} from "./StyledTelaInicial";
import check from "../assets/check.png";
import close from "../assets/close.png";
import star from "../assets/star.png";

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
      <Header>
        <h1>astroMatch</h1>
      </Header>
      <main>
        <PerfilFoto src={perfil.photo} />
        <br />
      </main>
      <Info>
        {perfil.name} <br />
        {perfil.age} anos
      </Info>
      <Bio>{perfil.bio}</Bio>

      <Botoes>
        <Botoes onClick={deslikePerson}>
          {" "}
          <ImgClose src={close}></ImgClose>
        </Botoes>
        <Botoes onClick={chosePerson}>
          <ImgCheck src={check}></ImgCheck>
        </Botoes>

        <br />
        <Botoes onClick={props.onChangeTelaMatches}>
          <ImgCheck src={star}></ImgCheck>{" "}
        </Botoes>
      </Botoes>
    </div>
  );
}

export default TelaInicial;
