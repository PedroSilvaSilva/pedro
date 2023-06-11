import { styled } from "styled-components";

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

const ContainerGrid = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ContainerChildren = styled.div`
  flex: 1 0 250px;
  margin: 10px;
`;

export { Container, ContainerGrid, ContainerChildren };
