import styled from "styled-components";
import img from "../images/homephoto.jpg";

export const HomeImg = styled.div`
  width: 100vw;
  height: 45vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100px;
  background-position: center;
  @media (max-width: 760px) {
    height: 50vh;
  } ;
`;
export const H1 = styled.h1`
  color: white;
  font-size: 65px;
  font-weight: 900;
  display: block;
  height: auto;
  text-align: center;
`;
export const AdminButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
  margin-top: -125px;
  @media (max-width: 760px) {
    margin-top: -90px;
  }
`;
export const AdminButton = styled.button`
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: none;
  background-color: #9f45b0;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: #e54ed0;
  }
`;
export const TripButtonContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -35px;
  margin-bottom: 48vh;
`;

export const TripButton = styled.button`
  padding: 20px;
  border-radius: 50px;
  border: none;
  background-color: #e6207e;
  color: white;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;
