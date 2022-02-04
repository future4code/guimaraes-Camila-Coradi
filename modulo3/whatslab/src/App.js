import React from "react";
import styled from "styled-components";
import whatsLogo from "./images/logo.png";
import whatsbackground from "./images/background.jpg";
import whatsmensagem from"./images/button.png"
// import { render } from "@testing-library/react";

const Containerprincipal = styled.div`
  border: 1px solid black;
  display: grid;
  flex-direction: row;
  margin: 100px;
  grid-template-rows: 1fr 22fr 1fr;

@media screen and (max-width: 990px) {
  margin: 0;
  margin-bottom: 10px;
}

@media screen and (max-width: 600px) {
  Containerprincipal {
    margin: 0px;
    height: 95vh;
    grid-template-rows: 2vh 1fr 5vh;
  Header{
    margin-top: 80px;

  }
}
`
const Header = styled.div`
  background-color: #42c0a6;
  color: white;
  display: flex;
  flex-direction:row-reverse
  align-items: flex-start;
  padding-left:  1.66vh;
  margin-right: 5;

img {
  width: 24px;
  height: 24px;
  margin: 0 auto
  margin: 0 auto;
}
`
const Main = styled.div`
  box-sizing: border-box;
  background-image: url(${whatsbackground});
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  word-wrap: break-word;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
 `
const Conversa = styled.div`
  height: 7vh;
  width: 20vw;
  background-color: #DDF7C8;
  border-radius: 8px;
`
const Footer = styled.div`
  background-color: #42c0a6;
 
 input{
  padding: 0.5em 0.8em;
  border-radius: 0.5em;
  font-weight: 450;
  line-height: 1.3;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2); 
  width: 350px;
  text-align: center;
  }

img{
  width: 20px;
  height: 20px;
  border-radius: 10%;
}
`
class App extends React.Component {
  state={
    enviar:[],
    valorInputNome:"",
    valorInputMensagem:"",

  };
  enviarAMensagem = () =>{
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem 
    };
    const enviarAsMensagens = [...this.state.enviar, novaMensagem ];
    this.setState({enviar: enviarAsMensagens })
  };
  onChangeInputNome = (event) =>{
    this.setState({valorInputNome: event.target.value });
  };
  onChangeInputMensagem = (event) => {
    this.setState({valorInputMensagem: event.target.value });
  };
  render() {     
    const envioDeMensagens = this.state.enviar.map((envia) =>{
    return <Conversa><p>{envia.nome} {envia.mensagem}</p></Conversa>    
    
  });

    return(
      <Containerprincipal>
        <Header>
          <img src={whatsLogo} alt="icone"/> 
          <header>WhatsLab</header>
        </Header>
     
        <Main>
          {envioDeMensagens}
        </Main> 

        <Footer>

          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"nome"}
          />
          <input 
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            placeholder={"mensagem"}
          />
          <button onClick={this.enviarAMensagem}><img src={whatsmensagem} alt="Enviar"></img></button>
        
        </Footer>
      
      </Containerprincipal>
    )
   }
  }
   
export default App;
