import styled, { css } from "styled-components";

const ButtonContainer = styled.button`
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
    props.color &&
    css`
      background-color: ${props.color};
      color: #ffffff;
    `}
`;

export { ButtonContainer };
