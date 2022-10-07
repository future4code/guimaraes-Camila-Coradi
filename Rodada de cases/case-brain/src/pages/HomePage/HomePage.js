import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import {
  Circle,
  NumberConteiner,
  Conteiner,
  Select,
  MainContainer,
  ContainerPage,
  LogoLoterias,
  Title,
  LeftCol,
  TitleWrap,
  RightCol,
  ConteinerInfo,
} from "./styled";
import logo from "../../assets/logo.png";

const HomePage = () => {
  const games = useRequestData([], `${BASE_URL}/loterias`);
  const contest = useRequestData([], `${BASE_URL}/loterias-concursos`);
  const [lotery, setLotery] = useState({ id: 0, nome: "mega-sena" });
  const [infoContest, setInfoContest] = useState([]);

  const getNumberContest = (id) => {
    axios
      .get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setInfoContest(res.data);
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  };
  const onChangeSelect = (event) => {
    games.map((g) => {
      if (event.target.value === g.nome) {
        setLotery(g);
      }
    });
  };
  useEffect(() => {
    if (games.length) {
      setLotery(games[0]);
    }
  }, [games]);

  useEffect(() => {
    if (contest.length) {
      contest.filter((c) => {
        if (c.loteriaId === lotery.id) {
          getNumberContest(c.concursoId);
        }
      });
    }
  }, [lotery]);

  const renderNumbers =
    infoContest.numeros &&
    infoContest.numeros.map((data) => {
      return (
        <ul>
          <Circle>{data}</Circle>
        </ul>
      );
    });

  const renderOptions = games.map((e) => {
    return (
      <option key={e.id} value={e.nome}>
        {e.nome.toUpperCase()}
      </option>
    );
  });

  return (
    <ContainerPage>
      <LeftCol></LeftCol>
      <Conteiner>
        <TitleWrap>
          <LogoLoterias src={logo} />
          <Title>{lotery && lotery.nome.toUpperCase()}</Title>
        </TitleWrap>

        <ConteinerInfo>
          <MainContainer>
            {" "}
            <Select onChange={onChangeSelect}>{renderOptions}</Select>
            <RightCol>
              <NumberConteiner>{renderNumbers}</NumberConteiner>
            </RightCol>
          </MainContainer>
        </ConteinerInfo>
      </Conteiner>
    </ContainerPage>
  );
};

export default HomePage;
