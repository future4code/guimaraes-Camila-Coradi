import React from "react";

export default class Parte1 extends React.Component {
    render() {
        return ( <div>
            <h1>ETAPA 1 - DADOS GERAIS</h1> 
             <ol>
                 <li>Qual o seu nome? 
                 </li>
                 <input></input>
                 <li>Qual a sua idade?
                 </li>
                 <input></input>
                <li>Qual o seu email?</li>
                <input></input>
                <li>Qual a sua escolaridade?</li>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                </select>

             </ol>
             </div>
        );
    }
}