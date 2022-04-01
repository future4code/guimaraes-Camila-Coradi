import React from "react";
import { useNavigate } from "react-router-dom";

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <input></input>
      <br />
      <input></input>
      <br />
      <input></input>
      <br />
      <input></input>
      <br />
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
