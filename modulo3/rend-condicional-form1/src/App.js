import './App.css';
import React from 'react';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'
import styled from "styled-components";

const Containerprincipal = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Form = styled.div`
  display: flex;
  flex-direction: row;
  text-align:center
`
const Button = styled.div`
  margin: 0em;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
`

export default class App extends React.Component {

  state= {
    etapa:1
  }
  onClickEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
    
  }

  renderizaEtapa = () => {
    let pagina;
    switch (this.state.etapa) {
      case 1:
       return <Etapa1 />;
      case 2:
       return <Etapa2 />;   
      case 3:
        return <Etapa3 />;
      case 4:
       return <Final />;
      default:
        console.log("erro");
        break;
    }
  }
    

  render(){
  return (
    <Containerprincipal>
      <Form>
      {this.renderizaEtapa()}
      </Form>
      <Button onClick={this.onClickEtapa}>Próxima etapa</Button>
    </Containerprincipal>

  );
}
}

  

  

