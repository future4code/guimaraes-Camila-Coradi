import React from 'react';
import styled from 'styled-components';


function CardPequeno(props) {
    return (<div>
        <div>                        
            <StyledContainerPequeno>
                <StyledImage src = { props.imagem }/>
                <p>{ props.email }</p>
                
            </StyledContainerPequeno>
         </div>
        </div>
       
    )
}



const StyledContainerPequeno = styled.div`
    display: flex;
    flex-wrap: wrap ;
    align-items: center;
    border: 1px solid black;
    padding: 10px 10px;
    margin-bottom: 10px;
    gap: 5px
    height: 200px;
   `
const StyledImage = styled.img`
    width: 30px;
    margin-right: 10px;
    
`

  


export default CardPequeno;