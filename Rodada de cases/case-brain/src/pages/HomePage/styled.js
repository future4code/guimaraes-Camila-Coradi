import styled from "styled-components";
import sidebar from "../../assets/sidebar.png";

export const ContainerPage = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 900px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr;
  }
`;
export const LeftCol = styled.div`
  flex: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 0;
  transform: skewX(10deg);
  transform-origin: right bottom;
  position: relative;

  @media screen and (max-width: 900px) {
    flex: 0.5;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    transform: skewY(10deg);
    transform-origin: top right;
  }
`;

export const Conteiner = styled.div`
  background-image: url(${sidebar});
  background-position: 100%;
  background-size: cover;
  width: 40vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: grid;
    flex-direction: column;
    grid-template-columns: 1fr;
    width: 315px;
  }
`;
export const TitleWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 50%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    top: unset;
    left: unset;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10em;
  }
`;
export const LogoLoterias = styled.img`
  color: #fff;
  width: 60px;
  height: 60px;
  @media screen and (max-width: 900px) {
    margin-bottom: 25px;
  }
`;
export const Title = styled.p`
  color: white;
  font-size: 1.7rem;
  font-weight: 600;
  padding: 0 0.8em;

  @media screen and (max-width: 900px) {
    padding: 0;
    line-height: 0;
  }
`;
export const ConteinerInfo = styled.div`
  display: flex;
  position: absolute;
  width: 60.5vw;
  height: 100vh;
  transform: translateX(65%);
  justify-content: space-around;
  align-items: center;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: space-between;
  margin-top: 25vh;
`;

export const Select = styled.select`
  grid-column: 2 / 3;
  left: 6%;
  height: 40px;
  padding: 10px;
  background-color: white;
  box-shadow: 2px 2px 2px #000000;
  border: 1px solid;
  border-radius: 5px;
  color: black;
  font-size: 16px;
  outline: none;
  &:hover,
  &:focus {
    transition: 0.4s;
    border: 1px solid;
    transition: 0.2s;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  } ;
`;
export const RightCol = styled.div`
  flex: 0.7;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex: 0.6;
    margin-right: 1.5em;
    height: 100%;
    margin-left: 25px;
  }
`;

export const NumberConteiner = styled.div`
  display: flex;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    right: 100px;
  }
`;
export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: black solid;
  background-color: #e2e2e5;
  margin-left: 5px;
  margin-right: auto;
  margin-bottom: auto;
  font-weight: bolder;
  font-size: 15px;
  padding: 1rem;
`;
