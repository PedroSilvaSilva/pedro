import { styled } from "styled-components";

const ContainerPro = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr 380px;
`;

const ContainerUser = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 15px;
  text-align: center;
  width: 100%;
  padding: 16px;
`;
const ContainerCalendar = styled.header`
  border-radius: 15px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export { ContainerPro, ContainerUser, ContainerCalendar };
