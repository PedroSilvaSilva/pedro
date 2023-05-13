import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 0.75rem 2rem;
  font-size: ${(props) => props.theme.fontSizes.medium};

  border: none;
  border-radius: 5px;
  cursor: pointer;

  &::placeholder {
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

export default Button;
