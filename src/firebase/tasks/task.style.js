import { styled } from "styled-components";

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1d555e;
  text-align: center;
`;

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 16px;
  color: black;
  padding: 2.5px;
  border: 3px solid #1d555e;
  border-radius: 15px;
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

const ContainerCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;
  margin-top: 80px;
`;
const ContainerMenu = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
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
  @media (max-width: 1133px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
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
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
`;
const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin-top: 80px;
  @media (max-width: 1133px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

const Input = styled.input`
  width: 70%;
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

const FormSelect = styled.select`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ConatinerBio = styled.textarea`
  height: 350px;
  @media (max-width: 1133px) {
  }
`;

const ConatinerMobile = styled.div``;

export {
  ConatinerBio,
  ConatinerMobile,
  ModalButton,
  PaginationWrapper,
  PaginationButton,
  Input,
  Title,
  Description,
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
  Input2,
  Description2,
  Description3,
  FormSelect,
};
