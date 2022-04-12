import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { url } from "../App";
import {
  BackButtonContent,
  Button,
  TripContent,
  TripInfo,
  TripContainer,
  Span,
  Title,
  Approved,
  CandidateInfo,
} from "../styled/styledTripDetailsPage";

export default function TripDetailsPage() {
  const navigate = useNavigate();

  const params = useParams();

  const [tripDetail, setTripDetail] = useState([]);

  const headers = {
    headers: {
      auth: localStorage.getItem("token"),
    },
  };

  const tripId = params.tripId;

  const getTripDetail = () => {
    axios
      .get(`${url}/trip/${params.tripId}`, headers)
      .then((response) => {
        setTripDetail(response.data.trip);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    getTripDetail();
  });

  const aproveCandidate = (candidate) => {
    const body = { approve: true };
    axios
      .put(
        `${url}/trips/${params.tripId}/candidates/${candidate.id}/decide`,
        body,
        headers
      )
      .then((res) => {
        alert(`Você aprovou o candidato ${candidate.name}!`);
        getTripDetail();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const reproveCandidate = (candidate) => {
    const body = { approve: false };
    axios
      .put(
        `${url}/trips/${params.tripId}/candidates/${candidate.id}/decide`,
        body,
        headers
      )
      .then((res) => {
        alert(`Você reprovou o candidato ${candidate.name}!`);
        getTripDetail();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={goBack}>Voltar</Button>
      </BackButtonContent>

      <h1 title={tripDetail.name}> </h1>
      <TripContent>
        <TripContainer>
          <TripInfo>
            Nome: <Span>{tripDetail.name}</Span>
          </TripInfo>
          <TripInfo>
            Descrição: <Span>{tripDetail.description}</Span>
          </TripInfo>
          <TripInfo>
            Planeta: <Span>{tripDetail.planet}</Span>
          </TripInfo>
          <TripInfo>
            Duração: <Span>{tripDetail.durationInDays} </Span>dias
          </TripInfo>
          <TripInfo>
            Data de partida: <Span>{tripDetail.date}</Span>
          </TripInfo>
        </TripContainer>
      </TripContent>

      <Title>Candidatos Pendentes</Title>
      {tripDetail.candidates?.map((candidate) => {
        return (
          <div key={candidate.id}>
            <CandidateInfo>Candidato: {candidate.name}</CandidateInfo>
            <CandidateInfo>Idade: {candidate.age} anos</CandidateInfo>
            <CandidateInfo>País de origem: {candidate.country}</CandidateInfo>
            <CandidateInfo>Profissão: {candidate.profession}</CandidateInfo>
            <CandidateInfo>
              Texto de Candidatura: {candidate.applicationText}
            </CandidateInfo>
            <div>
              <Button onClick={() => aproveCandidate(candidate)}>
                APROVAR
              </Button>
              <Button onClick={() => reproveCandidate(candidate)}>
                REPROVAR
              </Button>
            </div>
          </div>
        );
      })}

      <Title>Candidatos aprovados</Title>
      <TripContainer>
        {tripDetail.approved?.map((candidate) => {
          return (
            <div key={candidate.id}>
              <Approved>
                <li>
                  {candidate.name}, {candidate.age} anos, {candidate.country}
                </li>
              </Approved>
            </div>
          );
        })}
      </TripContainer>
    </div>
  );
}
