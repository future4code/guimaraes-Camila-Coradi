import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { aluna, Url } from "../App";

export default function LoginPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const goToAdminHomePage = () => {
    navigate("/admin/trips/list");
  };
  const handleUserInput = (e) => {
    const value = e.target.value;

    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const login = () => {
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${Url}${aluna}login`, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        goToAdminHomePage();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <h1>LoginPage</h1>

      <h2>Login</h2>
      <input
        placeholder="E-mail"
        onChange={handleUserInput}
        name="email"
        type="email"
        value={form.email}
      ></input>
      <input
        placeholder="Senha"
        onChange={handleUserInput}
        name="password"
        type="password"
        value={form.password}
      ></input>
      <button onClick={login}>Entrar</button>
      <button onClick={goToHomePage}>Voltar</button>
    </div>
  );
}
