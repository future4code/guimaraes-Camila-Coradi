import React from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../components/useGet";
import useRequestData from "../components/useRequestData";

export default function AdminHomePage() {
  const navigate = useNavigate();
  useRequestData();

  const goToCreateTripPage = () => {
    navigate("/admin/trips/create");
  };
  const goToTripDetailsPage = (e) => {
    const tripId = e.target.value;

    navigate(`/admin/trips/${tripId}`);
  };
  const trips = useGet();

  const renderTripsButton = trips.map((trip) => {
    return (
      <div key={trip.id}>
        <button value={trip.id} onClick={goToTripDetailsPage}>
          {trip.name}
        </button>
      </div>
    );
  });

  const goToHomePage = () => navigate(-2);

  return (
    <div>
      <h1>AdminHomePage</h1>

      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      {renderTripsButton}
      <button onClick={goToHomePage}>logout</button>
    </div>
  );
}
