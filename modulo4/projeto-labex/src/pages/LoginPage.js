import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const goToHomePage = () => navigate(-1);
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')

  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  const handlePassword=(e)=>{
    setPassword(e.target.value)
  }

  const login = ()=>{
    console.log(email, password)
    const body ={
        email: email,
        password:password
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/camila-leal-guimaraes/login', 
    body)
    .then((res)=> {
      localStorage.setItem("token", res.data.token)
      navigate("/admin/trips/list")
    })
    .catch((err) =>{
      alert('Erro: Usuário não encontrado')

    })
  }

  return (
    <div>
      <h1>LoginPage</h1>
      <input placeholder="e-mail" value={email} onChange={handleEmail}/>
      <input placeholder="senha" value={password} onChange={handlePassword} />
      <button onClick={login} >Login</button>
      <button onClick={goToHomePage}>Voltar</button>
      
    </div>
  );
}
