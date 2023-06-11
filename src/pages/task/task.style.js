import { styled } from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  padding: 16px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContainerAll = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const ContainerFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  padding: 10px;
`;

const ToolbarButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`;
export {
  ContainerAll,
  Button,
  Description,
  Title,
  Card,
  ToolbarButton,
  ToolbarWrapper,
  ContainerFirst,
};
