import styled from "styled-components";

const Container = styled.section`
  background-color: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Card = styled.div`
  background-color: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export { Input, Container, Description, Title, Card };
