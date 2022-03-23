import React, {useEffect, useState} from "react";
import axios from 'axios';


function TelaMatches(props){
const [listaMatches, setListaMatches] = useState([])

  const getMatches=()=>{
      axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/camilaleal/matches")
      .then((res) => setListaMatches(res.data.matches))
      .catch((err) => console.log(err))

  }

  useEffect(() =>getMatches(),[])

    return(
        <div>
           {listaMatches.map((match) => {
        return (
          <div>
            <div>
              <img width={'100vw'}src={match.photo}/>
              <div>{match.name}</div>
              <div>{match.age}</div>
            </div>
           
          </div>


        )
      })}
      <br/>
      <div>
                <button onClick={props.onChangeTelaIncial}>Voltar</button>
        </div>
        </div>
    )
}

export default TelaMatches