import styled, { css } from "styled-components";

const InputContainer = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;

  ${(props) =>
    props.size === "small" &&
    css`
      width: 50%;
      padding: 10px 16px;
      font-size: 14px;
    `}
  ${(props) =>
    props.size === "moresmall" &&
    css`
      width: 33.33%;
      padding: 7px 16px;
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
