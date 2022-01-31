import React from 'react';
import styled from 'styled-components';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div>
            <BigcardContainer>
            <StyledImg src={ props.imagem } />
            <div>
                <StyledH4>{ props.nome }</StyledH4>
                <p>{ props.descricao }</p>
            </div>
            </BigcardContainer>
        </div>
    )
}
const BigcardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;`

export const StyledImg  = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 100%;
`
const StyledH4 = styled.h4`
margin-bottom: 15px;
`


export default CardGrande;