import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useGet from "../components/useGet";
import useForms from "../components/useForms";
import { aluna, Url } from "../App";
import ListCountries from "../components/ListCountries";

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);
  const trips = useGet();

  const [form, handleUserInput] = useForms(({
    tripId: '',
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
}))

 const applyToTrip = (e) => {
    e.preventDefault()

    const body = {
        "name": form.name,
        "age": form.age,
        "applicationText": form.applicationText,
        "profession": form.profession,
        "country": form.country

    }

    axios
        .post(`${Url}${aluna}trips/${form.tripId}/apply`, body)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
}


  return (
    <div>
      <h1>ApplicationFormPage</h1>      
      <button onClick={goToHomePage}>Voltar</button>
      <form onSubmit={applyToTrip}>
                <h2>Cadastro</h2>
                <select onChange={handleUserInput}
                    name='tripId'
                    value={form.tripId}>
                    <option>Selecionar viagem...</option>
                    {trips.map((trip) => {
                        return <option key={trip.id} name='tripId' value={trip.id}>{trip.name}</option>
                    })}
                </select>
                <input placeholder="Nome"
                    onChange={handleUserInput}
                    value={form.name}
                    name='name'
                    required
                />
                <input placeholder="Idade"
                    onChange={handleUserInput}
                    type='number'
                    value={form.age}
                    name='age'
                    required
                />
                <input placeholder="Descrição"
                    onChange={handleUserInput}
                    value={form.applicationText}
                    name='applicationText'
                    required
                />
                <input placeholder="Profissão"
                    onChange={handleUserInput}
                    value={form.profession}
                    name='profession'
                    required
                />
                <ListCountries
                    handleUserInput={handleUserInput}
                    value={form.country}
                />
                <button>Enviar</button>
            </form>
    </div>
  );
}
