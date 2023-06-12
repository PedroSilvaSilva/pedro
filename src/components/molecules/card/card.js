import React from "react";
import { styled } from "styled-components";
import Toolbar from "../toolbar/tolbar";
import Carrossel from "_components/carrossel/carrossel";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  background: #fcf6ee;
  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 16px;
  width: 1050px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Card2 = styled.div`
  background: #fcf6ee;
  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 430px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Card3 = styled.div`
  background: #fcf6ee;

  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 490px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Card4 = styled.div`
  background: #fcf6ee;

  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 6px;
`;

const ContainerMenu = styled.div`
  border-bottom: 3px solid #d0d0d0;
  width: 100%;
  height: 100px;
  text-align: end;
`;

const ContainerImge = styled.div`
  text-align: end;
  img {
    border-radius: 15px;
  }
`;

const CardDashboard = () => {
  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate("/task");
  };

  return (
    <div>
      <ContainerMenu>
        <Toolbar />
      </ContainerMenu>
      <ContainerCard>
        <Card>
          <Title>Welcome back 👋 Pedro Silva </Title>
          <Description>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything.
          </Description>
          <ContainerImge>
            <img
              src="https://img.freepik.com/fotos-gratis/cores-vibrantes-fluem-em-padrao-de-onda-abstrato-gerado-por-ia_188544-9781.jpg?w=360"
              alt=""
            />
          </ContainerImge>
          <Button onClick={handlenavigate}> Go Now </Button>
        </Card>
        <Card2>
          <Carrossel />
        </Card2>
        <Card3>
          <Title>Total Active Users</Title>
          <Description> +2.6%</Description>
          <Description>18,765</Description>
        </Card3>
        <Card3>
          <Title>Total Active Users</Title>
          <Description> +2.6%</Description>
          <Description>18,765</Description>
        </Card3>
        <Card3>
          <Title>Total Active Users</Title>
          <Description> +2.6%</Description>
          <Description>18,765</Description>
        </Card3>

        <Card4>
          <Title>Total Active Users</Title>
          <Description> +2.6%</Description>
          <Description>18,765</Description>
        </Card4>
      </ContainerCard>
    </div>
  );
};

export default CardDashboard;
