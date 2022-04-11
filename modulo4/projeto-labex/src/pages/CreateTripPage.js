import { useNavigate } from "react-router-dom";
import { url } from "../App";
import axios from "axios";
import { ListPlanets } from "../components/ListPlanets";
import useForms from "../components/useForms";
import { Input, Select } from "../styled/FormStyles";
import {
  BackButtonContent,
  Button,
  ButtonCreate,
  Title,
} from "../styled/styledCreateTripPage";
export default function CreateTripPage() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { form, onChange, cleanFields } = useForms({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const creatTrip = (e) => {
    e.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays,
    };

    axios
      .post(`${url}/trips`, body, headers)
      .then((res) => alert("Viagem criada ;)"))
      .catch((err) => err);

    cleanFields();
  };

  return (
    <div>
      <div>
        <Title> CRIAR VIAGEM</Title>
        <div>
          <form onSubmit={creatTrip}>
            <Input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder={"Nome"}
              required
            />
            <Select
              name="planet"
              value={form.planet}
              onChange={onChange}
              placeholder={"Escolha um Planeta"}
              required
            >
              <option value={""}>Selecione um planeta</option>
              {ListPlanets.map((planets) => {
                return (
                  <option value={planets} key={planets}>
                    {planets}
                  </option>
                );
              })}
            </Select>
            <Input
              name="date"
              value={form.date}
              onChange={onChange}
              placeholder={"Data"}
              required
              type={"date"}
            />
            <Input
              name="description"
              value={form.description}
              onChange={onChange}
              placeholder={"Descrição"}
              required
              pattern={"^.{10,}"}
              title={"Sua texto deve ter no mínimo 10 caracteres"}
            />
            <Input
              name="durationInDays"
              value={form.durationInDays}
              onChange={onChange}
              placeholder={"Duração"}
              required
              type={"number"}
              min={1}
            />
            <BackButtonContent>
              <ButtonCreate>CRIAR</ButtonCreate>
              <Button onClick={goBack}>VOLTAR</Button>
            </BackButtonContent>
          </form>
        </div>
      </div>
    </div>
  );
}
