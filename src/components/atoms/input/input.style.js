import { styled } from "styled-components";
import theme from "../../../theme/theme";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 12px;
  background-color: white;
  border-bottom: 1px solid ${theme.colors.info};
  margin-bottom: 30px;
  font-family: ${theme.fonts.body};

  button {
    position: absolute;
    right: 12px;
  }
`;

const InputStyled = styled.input`
  border: none;
  font-size: 16px;
  min-width: 360px;
  width: 100%;
  height: auto;
  margin: 0;
  width: 100%;
  outline: 0;
  background-color: transparent;
`;

export { InputStyled, InputWrapper };
