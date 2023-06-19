import styled, { css } from "styled-components";

const CardContainer = styled.article`
  background: ${(props) => props.backgroundColor || "#fcf6ee"};
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.boxShadow ||
    "#d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"};
  padding: 3px;
  width: ${(props) => props.width || "430px"};
  height: ${(props) => props.height || "400px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
    width: 350px;
    height: 150px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 15px;
    img {
      display: none;
    }
  }

  @media (max-width: 650px) {
    width: 350px;
    height: 150px;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 15px;
    img {
      display: none;
    }
  }
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1d555e;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: #1d555e;
`;

export { Description, Title, CardContainer };
