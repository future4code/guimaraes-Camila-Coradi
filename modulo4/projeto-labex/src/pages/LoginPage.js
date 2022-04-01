import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const goToAdmin = () => navigate("/admin/trips/list");

  return (
    <div>
      <h1>LoginPage</h1>
      <input placeholder="email" />
      <input placeholder="senha" />
      <button onClick={goToAdmin}>Login</button>
    </div>
  );
}
