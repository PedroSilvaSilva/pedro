import { styled } from "styled-components";

import theme from "../../theme/theme";

const WidgetLayout = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.bg};
`;

const Container = styled.div`
  display: flex;
`;

const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px));
`;

export { WidgetLayout, Container, ContainerMain };
