import React from "react";
import styled from "styled-components";
import instagram from "../images/instagram.png";
import whatsapp from "../images/whatsapp.png";

export default function Footer() {
  return (
    <FooterDiv>
      <FooterRedes>
        <LinksFooter href="https://www.instagram.com/">
          <FooterImg src={instagram}></FooterImg>
        </LinksFooter>
        <LinksFooter href="https://web.whatsapp.com/">
          <FooterImg src={whatsapp}></FooterImg>
        </LinksFooter>
      </FooterRedes>

      <FooterEmail>labex@labenu.com.br</FooterEmail>
    </FooterDiv>
  );
}

const FooterDiv = styled.footer`
  background-color: #44008b;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 10px;
  font-size: 14px;
  position: fixed;
  width: 78vh;

  @media (max-width: 760px) {
    position: fixed;
    width: 55vh;
  }
`;
const FooterRedes = styled.div`
  display: flex;
  margin: 0 10px;
  gap: 20px;
`;
const FooterImg = styled.img`
  top: 19vh;
  width: 30px;
  filter: invert(95%) sepia(13%) saturate(406%) hue-rotate(337deg)
    brightness(105%) contrast(107%);
`;
const FooterEmail = styled.p`
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
`;

const LinksFooter = styled.a`
  text-decoration: none;
  color: white;
`;
