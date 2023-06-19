import styled, { css } from "styled-components";

const InputContainer = styled.input`
  width: 150px;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #1d555e;
  }
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 8px 16px;
      font-size: 14px;
    `}
  ${(props) =>
    props.size === "moresmall" &&
    css`
      width: 70px;
      padding: 6px 10px;
      font-size: 14px;
    `}
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
      color: #ffffff;
    `}
`;
export { InputContainer };
