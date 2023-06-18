import { styled } from "styled-components";
const Card = styled.article`
  background: #fcf6ee;
  border-radius: 15px;
  box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 3px;
  width: 290px;
  height: 150px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  .link {
    font-size: 8px;
    display: flex;
    font-weight: 200;
    align-items: center;
  }
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
  text-align: center;
`;

const Description = styled.p`
  font-size: 20px;
  margin-bottom: 16px;
  color: black;
`;
const Description2 = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: black;
`;
const Description3 = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: black;
  display: flex;
  justify-content: space-between;
`;

// const Button = styled.button`
//   background-color: #1d555e;
//   color: #ffffff;
//   border: none;
//   width: 150px;
//   border-radius: 4px;
//   padding: 8px 16px;
//   font-size: 14px;
//   cursor: pointer;

//   &:hover {
//     background-color: #1d555e;
//   }
// `;

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
const Card3 = styled.div`
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
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10px;
`;
const SideBar = styled.div``;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  gap: 15px;
`;

const ToolbarButton = styled.button`
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
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  width: 1500px;
  padding: 20px;
  border-radius: 4px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: #999;
  font-size: 18px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  background-color: #f0f0f0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
const Input2 = styled.input`
  width: 45%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: ${({ active }) => (active ? "#ccc" : "#fff")};
  border: 1px solid #ccc;
  cursor: pointer;
`;
export {
  PaginationWrapper,
  PaginationButton,
  Input,
  Card,
  Title,
  Description,
  // Button,
  Card2,
  ContainerCard,
  ContainerMenu,
  ContainerImge,
  ContairnerGeral,
  Container,
  SideBar,
  ToolbarWrapper,
  ToolbarButton,
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  Card3,
  Input2,
  Description2,
  Description3,
};
