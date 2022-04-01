import React from "react";
import { useNavigate } from "react-router-dom";
import { H1, HomeImg, AdminButtonContent, AdminButton, TripButtonContent, TripButton } from "../styled/styledHomePage";

export default function HomePage() {
  const navigate = useNavigate();
  const goToAdminHome = () => navigate("/login");
  const goToListTrips = () => navigate("/trips/list");

  return (
    <div>
      <HomeImg>
      <H1>LabeX</H1>
      <AdminButtonContent>
      <AdminButton onClick={goToAdminHome}>Login</AdminButton>
      </AdminButtonContent>
      </HomeImg>
     <TripButtonContent>
       <TripButton onClick={goToListTrips}>VER VIAGENS</TripButton>
     </TripButtonContent>
      
      
    </div>
  );
}
