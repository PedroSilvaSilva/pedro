import styled from "styled-components";

import theme from "_theme/theme";

const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  padding: 0.75rem 2rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &::placeholder {
    color: ${theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

export { ButtonContainer };
