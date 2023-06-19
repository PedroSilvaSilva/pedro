import { styled } from "styled-components";

const ContairnerGeral = styled.section`
  width: 100%;
  display: flex;
  background-color: #f2f2f2;

  @media (max-width: 1133px), (max-width: 986px), (max-width: 853px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
const Container = styled.article`
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
`;

const ContainerMobile = styled.article`
  @media (max-width: 1133px) {
    display: none;
  }
`;

export { ContairnerGeral, Container, ContainerMobile };
