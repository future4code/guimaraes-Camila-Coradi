import styled from "styled-components";

export const BackButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-top: 30px;
`;
export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 15px;
  margin-top: 15px;
  border-radius: 50px;
  border: none;
  background-color: #e6207e;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;

export const ButtonExit = styled.button`
  padding: 15px 45px;
  margin-top: 15px;
  border-radius: 50px;
  border: none;
  background-color: #e6207e;
  color: white;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background-color: rgb(212, 12, 126);
  }
`;

export const TripContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 100px;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  } ;
`;
export const TripContent = styled.div`
  background-color: rgb(251, 253, 253);
  display: flex;
  justify-content: space-between;
  border: 1px solid #9f45b0;
  border-radius: 10px;
  min-height: 160px;
  max-height: 400px;
  max-width: 400px;
  padding: 10px;
  box-sizing: border-box;
  :hover {
    box-shadow: 10px 5px 5px rgba(90, 100, 300, 0.5);
  }
`;

export const TripText = styled.h3`
  color: #828282;
  cursor: pointer;
`;

export const Trip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DeleteContent = styled.div`
  display: flex;
  align-items: center;

  :hover {
    background-color: rgba(60, 180, 189, 0.2);
    border-radius: 500px;
  }
`;
