import React from "react";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);

  return (
    <div>
      TripDetailsPage
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
