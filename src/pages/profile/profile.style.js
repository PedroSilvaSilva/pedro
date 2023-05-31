import { styled } from "styled-components";

const ContainerPro = styled.div`
  display: grid;
  grid-template-columns: 350px auto 350px;
  margin: 0 auto;
`;

const ContainerUser = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 15px;
  text-align: center;
  width: 800px;
  padding: 15px;
`;

export { ContainerPro, ContainerUser };
