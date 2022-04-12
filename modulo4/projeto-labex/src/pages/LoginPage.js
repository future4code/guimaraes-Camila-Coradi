import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "../App";
import { Title, Button, ButtonContent } from "../styled/styledLoginPage";
import { Fields, Input } from "../styled/FormStyles";

export default function LoginPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate("/");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const login = () => {
    const body = {
      email: email,
      password: password,
    };
    axios
      .post(`${url}/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/admin/trips/list");
      })
      .catch((err) => err.response);
    alert("Erro: Usuário não encontrado");
  };

  return (
    <div>
      <Title>LOGIN</Title>
      <Fields>
        <Input
          type={"email"}
          placeholder={"Nome"}
          value={email}
          onChange={handleEmail}
          required
        />
        <Input
          type={"password"}
          placeholder={"Senha"}
          value={password}
          onChange={handlePassword}
          required
        />
        <br />
        <br />
      </Fields>
      <ButtonContent>
        <Button onClick={login}>Login</Button>
      </ButtonContent>
      <ButtonContent>
        {" "}
        <Button onClick={goToHomePage}>Voltar</Button>
      </ButtonContent>
    </div>
  );
}
