import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage() {
  const navigate = useNavigate();
  const goToFormPage = () => navigate("/trips/application");
  const goToHomePage = () => navigate(-1);

  return (
    <div>
      <p>Lista de Viagens</p>

      <div>
        <p>Destino 1</p>
        <p>Destino 2</p>
        <p>Destino 3</p>
        <p>Destino 4</p>
      </div>
      <button onClick={goToFormPage}>Viaje agora</button>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
