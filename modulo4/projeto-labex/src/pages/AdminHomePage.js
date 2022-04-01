import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
  const navigate = useNavigate();
  const goToCreateTripAdmin = () => navigate("/admin/trips/create");
  const goToTripDetails = () => navigate("/admin/trips/:id");

  const goToHomePage = () => navigate(-2);

  return (
    <div>
      <h1>AdminHomePage</h1>

      <p>Destino Admin 1</p>
      <p>Destino Admin 2</p>
      <p>Destino Admin 3</p>
      <p>Destino Admin 4</p>
      <button onClick={goToCreateTripAdmin}>Viagens</button>
      <button onClick={goToTripDetails}>Ver Detalhes</button>
      <button onClick={goToHomePage}>logout</button>
    </div>
  );
}
