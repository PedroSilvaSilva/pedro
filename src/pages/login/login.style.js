import { styled } from "styled-components";

const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;

const WidgetLogin = styled.section`
  display: flex;
  gap: 50px;

  .title {
    text-align: center;
  }
`;

export { ContainerLogin, WidgetLogin };
