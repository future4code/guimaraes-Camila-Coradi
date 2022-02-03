import React from "react";
import styled from "styled-components";
import whatsLogo from "./images/logo.png";
import whatsbackground from "./images/background.jpg";
import whatsmensagem from"./images/button.png"

const Containerprincipal = styled.div`
  border: 1px solid black;
  display: grid;
  flex-direction: row;
  margin: 100px;
  grid-template-rows: 1fr 22fr 1fr;

@media screen and (max-width: 990px) {
  margin: 0;
  margin-bottom: 10px;
  margin: 10px;
}

@media screen and (max-width: 600px) {
  Containerprincipal {
  margin: 0px;
  height: 95vh;
  grid-template-rows: 6vh 1fr 11vh;
  }
`
const Header = styled.div`
  background-color: #42c0a6;
  color: white;
  display: flex;
  flex-direction: column
  align-items: flex-start;
  padding-left:  1.66vh;

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
function App() {
  return (
    <Containerprincipal>
      <Header>
        <img src={whatsLogo} alt="icone"/> 
        <header>WhatsLab</header>
      </Header>
     
      <Main>
       
      </Main> 

      <Footer>
          <input placeholder="Nome"/>
          <input placeholder="Mensagem"/>
          <button><img src={whatsmensagem} /></button>
      </Footer>
      
    </Containerprincipal>
  );
}

export default App;
