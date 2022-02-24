import React from "react";
import axios from "axios";

export default class ListaUsers extends React.Component {
  state = {
    userLista: [],
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "camila-leal-guimaraes",
          },
        }
      )
      .then((res) => {
        this.setState({ userLista: res.data });
      })
      .catch((err) => {
        alert("erro");
      });
  };

  render() {
    const ListaUsuarios = this.state.userLista.map((user) => {
      return (
        <div>
          <li> {user.nome} </li>
          <button>Deletar</button>
        </div>
      );
    });
    return <div>{ListaUsuarios}</div>;
  }
}
