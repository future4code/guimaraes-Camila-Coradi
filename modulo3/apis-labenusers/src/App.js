import React from 'react';
import axios from 'axios';
import InputUsers from './components/InputUsers';
;

export default class App extends React.Component{


  render(){
    return(
      <div>
        <h3>Labenusers</h3>
        <button>Lista de usuários</button>
        <InputUsers/>

      </div>
    )
  }
}