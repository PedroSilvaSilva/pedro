import { styled } from "styled-components";

const ContainerBar = styled.section`
  display: flex;
  height: 100vh;
  width: 250px;
  background-color: rgb(56, 148, 143);
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1130px) {
    display: none;
  }
`;

const ContainerHeader = styled.ul`
  padding: 0;
  width: 100%;
  #active {
    background-color: #1d555e;
    border-radius: 15px;
  }
`;

const ContainerLi = styled.li`
  width: 100%;
  height: 60px;
  list-style-type: none;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: center;
  align-items: center;
  color: #fcf6ee;
  #icon {
    flex: 30%;
    display: grid;
    place-items: center;
  }
  #title {
    flex: 70%;
  }
  :hover {
    cursor: pointer;
  }
`;

export { ContainerBar, ContainerHeader, ContainerLi };
