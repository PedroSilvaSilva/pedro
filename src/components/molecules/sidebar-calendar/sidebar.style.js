import { styled } from "styled-components";

const ContainerBar = styled.div`
  display: flex;
  height: 100vh;
  width: 250px;
  background-color: white;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

const ContainerHeader = styled.ul`
  padding: 0;
  width: 100%;
  #active {
    background-color: #f2f4f1;
  }
`;

const ContainerLogo = styled.li`
  width: 100%;
  height: 60px;
  list-style-type: none;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  color: black;
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
`;

const ContainerUSer = styled.div`
  border: 1px solid blue;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerCalendar = styled.header`
  border: 3px solid blue;
  border-radius: 15px;
`;

export {
  ContainerBar,
  ContainerHeader,
  ContainerLogo,
  ContainerUSer,
  ContainerCalendar,
};
