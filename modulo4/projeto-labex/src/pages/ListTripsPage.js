import React from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
import useRequestData from "../components/useRequestData";
import {
  TripContainer,
  TripContent,
  BackButtonContent,
  Button,
} from "../styled/styledListTripPage";

export default function ListTripsPage() {
  const [listTrips] = useRequestData(`${url}/trips`);

  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goToApplicationFormPage = () => navigate("/trips/application");

  return (
    <div>
      <BackButtonContent>
        <Button onClick={goBack}>VOLTAR</Button>
      </BackButtonContent>

      {listTrips?.trips.map((trip) => {
        return (
          <TripContainer>
            <TripContent>
              <p key={trip.id}>
                {" "}
                <p> Nome: </p> {trip.name}
              </p>
              <p>
                {" "}
                <p> Descrição: </p> {trip.description}{" "}
              </p>
              <p>
                {" "}
                <p> Planeta: </p> {trip.planet}{" "}
              </p>
              <p>
                {" "}
                <p> Dias de Viagem:</p> {trip.durationInDays}
              </p>
              <p>
                {" "}
                <p> Data:</p> {trip.date}
              </p>
              <br />
            </TripContent>
          </TripContainer>
        );
      })}

      <BackButtonContent>
        {" "}
        <Button onClick={goToApplicationFormPage}>VIAJE AGORA</Button>{" "}
      </BackButtonContent>
    </div>
  );
}
