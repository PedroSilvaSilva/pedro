import styled from "styled-components";

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  gap: 25px;
  padding: 20px;
  img {
    width: 150px;
  }
  button {
    display: none;
  }

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export { ToolbarWrapper };
