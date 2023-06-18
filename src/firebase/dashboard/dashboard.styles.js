import { styled } from "styled-components";
const Card = styled.article`
  background: #fcf6ee;
  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 3px;
  width: 430px;
  height: 400px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  @media (max-width: 750px) {
    width: 350px;
    height: 250px;
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

const Button = styled.button`
  background-color: #1d555e;
  color: #ffffff;
  border: none;
  width: 150px;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #1d555e;
  }
`;

const Card2 = styled.div`
  background: #fcf6ee;
  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 1320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
`;

const ContainerCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
`;
const ContainerMenu = styled.div`
  border-bottom: 3px solid #d0d0d0;
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
const ContairnerGeral = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;
const Container = styled.div``;
const SideBar = styled.div``;

export {
  Card,
  Title,
  Description,
  Button,
  Card2,
  ContainerCard,
  ContainerMenu,
  ContainerImge,
  ContairnerGeral,
  Container,
  SideBar,
};
