import React from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../components/useGet";

export default function ListTripsPage() {
  const navigate = useNavigate();
  const goToFormPage = () => navigate("/trips/application");
  const goToHomePage = () => navigate(-1);

  const trips = useGet();

  const renderTrips = trips.map((trip) => {
    return (
      <div key={trip.id}>
        <p>Nome: {trip.name}</p>
        <p>Descrição: {trip.description}</p>
        <p>Data: {trip.date}</p>
        <p>Duração: {trip.durationInDays}</p>
        <p>Localização: {trip.planet}</p>
      </div>
    );
  });

  return (
    <div>
      <p>Viagens</p>
      {renderTrips}

      <button onClick={goToFormPage}>Viaje agora</button>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
