import { styled } from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContinerSection = styled.section`
  display: flex;
  gap: 10px;

  ul {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    border: 2px solid black;
  }
`;

export { ContainerCard, ContinerSection };
