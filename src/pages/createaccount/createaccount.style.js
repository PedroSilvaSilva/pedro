import { styled } from "styled-components";

const ContainerCreate = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
  }
`;

export { ContainerCreate };
