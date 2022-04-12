import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useForms from "../components/useForms";
import { url } from "../App";
import useRequestData from "../components/useRequestData";
import { listcountries } from "../components/listcountries";
import { Button, ButtonContent, Title } from "../styled/styledAppFormPage";
import { Fields, Input, Select } from "../styled/FormStyles";

export default function ApplicationFormPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const [listTrips] = useRequestData(`${url}/trips`);

  const { form, onChange, clean } = useForms({
    tripId: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const applyTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
      .post(`${url}/trips/${form.tripId}/apply`, body)
      .then((res) => {
        alert("Formulário enviado com sucesso");
      })
      .catch((err) => err.response);
    alert("Erro interno");

    clean();
  };

  return (
    <div>
      <Title>Inscreva-se</Title>
      <Fields>
        <form onSubmit={applyTrip}>
          <Select
            value={form.tripId}
            required
            name={"tripId"}
            onChange={onChange}
          >
            <option value={""}>Selecione a viagem:</option>
            {listTrips?.trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name} {trip.planet}
                </option>
              );
            })}
          </Select>
          <Input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder={"Nome"}
            required
          />
          <Input
            name="age"
            value={form.age}
            onChange={onChange}
            placeholder={"Idade"}
            required
            type={"number"}
            min={18}
          />
          <Input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            placeholder={"Texto de Candidatura"}
            required
            pattern={"^.{10,}"}
            title={"Sua texto de candidatura deve ter ao menos 10 caracteres"}
          />
          <Input
            name="profession"
            value={form.profession}
            onChange={onChange}
            placeholder={"Profissão"}
            required
            pattern={"^.{4,}"}
            title={"Sua profissão deve ter no mínimo 4 caracteres"}
          />
          <Select
            value={form.country}
            required
            name={"country"}
            onChange={onChange}
          >
            <option value={""}>País de origem:</option>
            {listcountries.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </Select>
          <br />
          <ButtonContent>
            <Button>Enviar</Button>
          </ButtonContent>
        </form>
      </Fields>
      <ButtonContent>
        <Button onClick={goBack}>Voltar</Button>
      </ButtonContent>
    </div>
  );
}
