import { styled } from "styled-components";
import theme from "../../theme/theme";

const ContainerBar = styled.div`
  display: flex;
  gap: 70px;
`;

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 280px;

  background-color: ${theme.colors.background};
`;
export { ContainerBar, ContainerHeader };
