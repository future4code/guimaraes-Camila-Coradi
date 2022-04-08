import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { aluna, Url } from "../App";
import useGet from "../components/useGet";
import useRequestData from "../components/useRequestData";

export default function AdminHomePage() {
  const navigate = useNavigate();
  useRequestData();
  const trips = useGet()

  const goToCreateTripPage = () => {
    navigate('/admin/trips/create')
}
const goToTripDetailsPage = (e) => {
    const tripId = e.target.value

    navigate(`/admin/trips/${tripId}`)
}
const userLogout = () =>{
    window.localStorage.removeItem('token')
    navigate('/')
}
const deleteTrip = (e) => {
    const tripId = e.target.value
    const token = window.localStorage.getItem('token')

    const header = {
        headers: {
            auth: token
        }
    }

    axios
        .delete(`${Url}${aluna}trips/${tripId}`, header)
        .then((res) => {

        })
        .catch((err) => {
            console.log(err.message)
        })
}

const renderTripsButton = trips
    .map((trip) => {
        return <div key={trip.id}>
            <button value={trip.id}
                onClick={goToTripDetailsPage}
            >{trip.name}
            </button>
                <button onClick={deleteTrip} value={trip.id}>Deletar</button>
        </div>
    })

  

  return (
    <div>
      <h1>AdminHomePage</h1>

      <button onClick={goToCreateTripPage}>Criar Viagem</button>
      {renderTripsButton}
      <button onClick={userLogout}>logout</button>
    </div>
  );
}
