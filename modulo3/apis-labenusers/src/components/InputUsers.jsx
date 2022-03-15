import React from "react";
import axios from "axios";

export default class InputUsers extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };
  addNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  addEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  criaUser = () => {
    const body = {
      nome: this.state.inputNome,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "camila-leal-guimaraes",
          },
        }
      )
      .then((res) => {
        alert("Usuário criado com sucesso!");
      })
      .catch((err) => {
        alert("Erro ao criar o usuário!");
      });
  };

  render() {
    return (
      <div>
        <p>Criar Usuários</p>
        <div>
          <input
            placeholder="nome"
            value={this.state.inputNome}
            onChange={this.addNome}
          />
          <input
            placeholder="email"
            value={this.state.inputEmail}
            onChange={this.addEmail}
          />
          <button onClick={this.criaUser}> Criar </button>
        </div>
      </div>
    );
  }
}
