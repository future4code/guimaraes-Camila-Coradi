import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
import useRequestData from "../components/useRequestData";
import DeleteImg from "../images/delete.png";
import {
  BackButtonContent,
  Button,
  DeleteContent,
  TripContent,
  Trip,
  TripText,
  ButtonExit,
} from "../styled/styledAdminiHomePage";

export default function AdminHomePage() {
  const [listTrips, setListTrips] = useRequestData(`${url}/trips`);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const goToHomePage = () => navigate("/");
  const createTrip = () => navigate("create");
  const goToTripDetails = (tripId) => {
    const tripIdentif = tripId;
    navigate(`/admin/trips/${tripIdentif}`);
  };

  const tripDelete = (trip) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    if (window.confirm("Deletar?")) {
      axios
        .delete(`${url}/trips/${trip.id}`, headers)
        .then((res) => navigate("/admin/trips/list"), setListTrips())
        .catch((err) => err.response);
    }
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={goToHomePage}>VOLTAR</Button>
      </BackButtonContent>

      {listTrips?.trips.map((trip) => {
        return (
          <TripContent onClick={() => goToTripDetails(trip.id)} key={trip.id}>
            <Trip>
              {" "}
              <TripText>{trip.name}</TripText>
              <DeleteContent
                onClick={(e) => {
                  tripDelete(trip);
                  navigate("/admin");
                  e.stopPropagation();
                }}
              >
                {" "}
                <img src={DeleteImg} width="40px"></img>
              </DeleteContent>
            </Trip>
            <br />
          </TripContent>
        );
      })}

      <Button onClick={createTrip}>CRIAR VIAGEM</Button>
      <ButtonExit onClick={logout}>SAIR</ButtonExit>
    </div>
  );
}
