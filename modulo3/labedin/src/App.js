import React from 'react';
import styled from'styled-components';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import CardPequeno2 from './components/CardPequeno/CardPequeno2';
import CardPequeno3 from './components/CardPequeno/CardPequeno3';




const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  `
  
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  `
const Styledsection = styled.div`
  width: 40vw;
  margin: 10px 0;
`
const StyledText = styled.h3`
  text-align: center;
  margin-bottom: 20px;
`

function App() {
  return (

    <StyledBody>
     
      <Styledsection>
        <Titulo>Dados pessoais</Titulo> 
        <CardGrande 
          imagem="https://scontent.fcgh7-1.fna.fbcdn.net/v/t39.30808-6/256521254_10158886021193423_5846200912337911300_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeH1ZETy7dM5m5atWSq_a8ECZCazgMNVZyRkJrOAw1VnJCRRA_6rNyfnPZ7ASpbLads&_nc_ohc=xoJjyo_PMLMAX8S17bV&_nc_ht=scontent.fcgh7-1.fna&oh=00_AT9PT0LJls2SjZT4C1L8UChHFgjc_HLFUqsyRilpVqp5-g&oe=61F81087" 
          nome="Camila" 
          descricao="Oi, eu sou a Camila. Sou aluna da Labenu. Adoro codar e bobeiras da internet."
        />
        <Titulo>Contato</Titulo>
        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/3204/premium/3204325.png?token=exp=1643319039~hmac=47920a1a574391767abc7dbf0b39c643"
          email="Email: camila_coradi@hotmail.com"
          endereço="Endereço: Rua Corcovado, 134"
          />
        <CardPequeno2
        imagem="https://cdn-icons-png.flaticon.com/512/1239/1239525.png"
        endereco="Endereço: Rua Corcovado, 134"
        />  
       
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </Styledsection>

      <Styledsection>
        <Titulo>Experiências profissionais</Titulo>
        <CardGrande 
          imagem="https://ncdn0.infojobs.com.br/logos/Company_Evaluation/98639.jpg" 
          nome="Atento" 
          descricao="Especialista em atendimento bancário na área de investimentos!" 
        />
        
        <CardGrande 
          imagem="https://cdn.spacemoney.com.br/upload/dn_arquivo/2021/06/dasa.png" 
          nome="Dasa" 
          descricao="Analista administrativo, apoio nas áreas de planejamento e financeiro " 
        />
      </Styledsection>

      <Styledsection>
        <Titulo>Minhas redes sociais</Titulo>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />  

        <CardPequeno3
          imagem="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1643305590~hmac=35bedb176737e42abfdfeb48a65d6f72"
          texto="Linkedin"   
        />
      </Styledsection>
    </StyledBody>
  );
}

export default App;
