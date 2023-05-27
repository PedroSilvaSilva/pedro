import { styled } from "styled-components";
import theme from "../../theme/theme";

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
`;

const ContainerHeader = styled.header`
  border: 1px solid blue;
  border-radius: 0px 15px 15px 0px;
  background-color: ${theme.colors.background};
  width: 280px;
  height: 100vh;
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export { ContainerBar, ContainerHeader, ContainerLogo };
