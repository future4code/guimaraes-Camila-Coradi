import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGet from "../components/useGet";
import ListCountries from "../components/ListCountries";

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);

  const [form, setForm] = useState({
    tripSelect: "",
    name: "",
    age: "",
    applyDesc: "",
    profession: "",
    countrySelect: "",
  });

  const trips = useGet();

  const handleUserInput = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      [e.target.name]: value,
    });
    console.log(form);
  };

  return (
    <div>
      <h1>ApplicationFormPage</h1>

      <select
        onChange={handleUserInput}
        name="tripSelect"
        value={form.tripSelect}
      >
        {trips.map((trip) => {
          return (
            <option key={trip.id} value={trip.name}>
              {trip.name}
            </option>
          );
        })}
      </select>
      <input
        placeholder="Nome"
        onChange={handleUserInput}
        value={form.name}
        name="name"
      ></input>
      <input
        placeholder="Idade"
        onChange={handleUserInput}
        type="number"
        value={form.age}
        name="age"
      ></input>
      <input
        placeholder="Descrição"
        onChange={handleUserInput}
        value={form.applyDesc}
        name="applyDesc"
      ></input>
      <input
        placeholder="Profissão"
        onChange={handleUserInput}
        value={form.profession}
        name="profession"
      ></input>
      <ListCountries
        handleUserInput={handleUserInput}
        value={form.countrySelect}
      />
      <button>Enviar</button>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
