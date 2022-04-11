import styled from "styled-components";

export const BackButtonContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
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
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "nunito", sans-serif;
  font-size: 28px;
  color: #9f45b0;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
export const TripContainer = styled.div`
  display: grid;
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;
export const TripContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(251, 253, 253);
  border: 1px solid #9f45b0;
  border-radius: 10px;
  max-height: 600px;
  max-width: 600px;
  padding: 10px;
  box-sizing: border-box;
`;
export const TripTitle = styled.h2`
  color: #828282;
  text-shadow: 0.1em 0.1em 0.2em white;
`;
export const TripInfo = styled.h4`
  color: #828282;
`;
export const Span = styled.span`
  color: black;
  font-weight: 400;
`;
export const Approved = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CandidateInfo = styled.h4`
  color: #828282;
  margin: 5px;
`;
