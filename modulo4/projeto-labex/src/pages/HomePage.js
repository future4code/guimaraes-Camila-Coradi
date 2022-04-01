import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const goToAdminHome = () => navigate("/login");
  const goToListTrips = () => navigate("/trips/list");

  return (
    <div>
      <h1>HomePage</h1>

      <button onClick={goToAdminHome}>Admin Login</button>
      <button onClick={goToListTrips}>VER VIAGENS</button>
    </div>
  );
}
