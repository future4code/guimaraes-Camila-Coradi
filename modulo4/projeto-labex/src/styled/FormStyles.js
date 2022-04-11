import styled from "styled-components";

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  gap: 10px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid #fbcaff;
  background-color: #fdebf7;
  text-align: left;
  ::-webkit-input-placeholder {
    color: #828282;
    font-size: 16px;
    font-family: "nunito", sans-serif;
  }
`;
export const Select = styled.select`
  display: block;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 20px 10px;
  border-radius: 10px;
  border: 1px solid #fdebf7;
  background-color: #fdebf7;
  text-align: left;
  ::-webkit-input-placeholder {
    color: #828282;
    font-size: 16px;
    font-family: "nunito", sans-serif;
  }
`;
