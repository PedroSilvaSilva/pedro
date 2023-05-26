import { styled } from "styled-components";
import theme from "../../theme/theme";
const Input = styled.input`
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  color: #8a97a0;
  border-bottom: 1px solid ${theme.colors.info};
  margin-bottom: 30px;
  font-family: ${theme.fonts.body};
`;

export default Input;
