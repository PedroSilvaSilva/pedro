import { styled } from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px;
  background-color: white;
`;

const InputStyled = styled.input`
  border: none;
  font-size: 16px;
  min-width: 360px;
  height: auto;
  margin: 0;
  outline: 0;
  border-radius: 10px;
`;

export { InputStyled, InputWrapper };
