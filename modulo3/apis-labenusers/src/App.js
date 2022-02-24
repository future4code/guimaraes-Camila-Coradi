import React from "react";
import axios from "axios";
import InputUsers from "./components/InputUsers";
import ListaUsers from "./components/ListaUsers";

export default class App extends React.Component {
  state = {
    pagina: true,
  };

  mudaPagina = () => {
    this.setState({ pagina: !this.state.pagina });
  };

  render() {
    return (
      <div>
        <h3>Labenusers</h3>
        <button onClick={this.mudaPagina}>Lista de usuários</button>
        <InputUsers />

        <ListaUsers />
      </div>
    );
  }
}
