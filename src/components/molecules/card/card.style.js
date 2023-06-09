import { styled } from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
`;

const ContinerSection = styled.section`
  display: flex;
  gap: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 690px;
  height: auto;

  ul {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    border: 2px solid black;
    margin-top: 50px;
  }
`;

export { ContainerCard, ContinerSection };
