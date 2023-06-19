import { styled } from "styled-components";
const ContainerGeral = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    h2,
    h1,
    p {
      font-size: 15px;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1d555e;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: #1d555e;
`;

const ContainerMenu = styled.div`
  width: 100%;
  height: 100px;
  text-align: end;
`;

const ContainerImge = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 15px;
    height: 250px;
    background-image: none;
  }
`;

const Container = styled.div``;
const SideBar = styled.div``;

export {
  Title,
  Description,
  ContainerGeral,
  ContainerMenu,
  ContainerImge,
  Container,
  SideBar,
};
