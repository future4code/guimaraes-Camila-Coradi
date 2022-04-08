import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TripDetailsPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);

  return (
    <div>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
