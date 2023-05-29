import { styled } from "styled-components";

const ContainerBar = styled.div`
  height: 100vh;
  width: 250px;
  background-color: #2f4050;
`;

const ContainerHeader = styled.ul`
  padding: 0;
  width: 100%;
`;

const ContainerLogo = styled.li`
  width: 100%;
  height: 60px;
  list-style-type: none;
  margin: 0%;
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: center;
  align-items: center;
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
  .active {
    background-color: red;
  }
`;

export { ContainerBar, ContainerHeader, ContainerLogo };
