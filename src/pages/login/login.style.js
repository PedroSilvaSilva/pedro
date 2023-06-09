import { styled } from "styled-components";

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f1;
  gap: 100px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    padding: 15px;
    h2 {
      font-size: 14px;
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
`;

const ContainerImg = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 35px;
`;

export { ContainerLogin, ContainerImg };
