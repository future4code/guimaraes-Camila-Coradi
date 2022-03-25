import styled from "styled-components";

export const Principal = styled.div`
  display: flex;
  justify-content: center;
  padding: 40%;
`;
export const Header = styled.header`
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: center;
  margin: auto;
  color: whitesmoke;
  border-bottom: 3px solid #fd5068;
  padding-bottom: 2px;
  background: linear-gradient(262deg, #ff7854, #fd267d);
  letter-spacing: 0.5px;
  height: 80px;
  box-shadow: 0 1px 8px 0 rgb(0 20 20 / 20%);
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
export const PerfilFoto = styled.img`
  width: 380px;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 20, 20, 0.5);
  bottom: 0px;
  left: 20px;
`;
export const Info = styled.div`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 0px;
  left: 20px;
  text-shadow: 1px 1px 5px #444;
  padding-left: 30vh;
  top: 75vh;
`;
export const Bio = styled.div`
  color: #1c1c1c;
  text-shadow: 1px 2px 5px;
  font-size: x-large;
`;
export const Botoes = styled.div`
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin: 10px;
  border-radius: 50%;
  color: #11e298;
  font-size: 32px;
`;
export const ImgClose = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
  @media screen and (max-width: 375px) {
    font-size: 60px;
  }
`;
export const ImgCheck = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
  @media screen and (max-width: 375px) {
    font-size: 60px;
  }
`;

