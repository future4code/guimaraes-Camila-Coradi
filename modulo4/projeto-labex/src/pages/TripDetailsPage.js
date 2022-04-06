import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TripDetailsPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);
  useEffect(()=>{
    axios
    .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-leal-guimaraes/trip/:id')
    .then()
    .catch()
  }, [])

  return (
    <div>
      TripDetailsPage
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
