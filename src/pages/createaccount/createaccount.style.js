import { styled } from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  .imagem {
    height: 95vh;
  }
  padding: 15px;
  @media (max-width: 1561px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 10px;
    .imagem {
      display: none;
    }
  }
`;

const LoginContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const LoginTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
`;

const NewUserText = styled.p`
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-weight: bold;
  }

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Form = styled.form`
  width: 100%;
`;

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 0;
`;

const ForgotPasswordLink = styled.span`
  display: block;
  margin-top: 10px;

  a {
    color: #007bff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #0056b3;
    }
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export {
  Button,
  ForgotPasswordLink,
  ErrorMessage,
  Input,
  Fieldset,
  Form,
  NewUserText,
  LoginTitle,
  LoginContainer,
  Section,
};
