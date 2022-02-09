import React from 'react'

export default class Parte2 extends React.Component {
    render() {
        return ( <div>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1> 
              <ol>
                 <li>Caso você tenha respondido Ensino Superior incompleto: Por que você não terminou um curso de graduação?
                 </li>
                 <input></input>
                 <li>Você fez algum curso complementar?
                 </li>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso tecnico">Curso técnico</option>
                    <option value="Curso de ingles">Curso de inglês</option>
                </select>
             </ol>
             </div> 
        )
    }
} 