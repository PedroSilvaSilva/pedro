const { styled } = require("styled-components");

const ContainerFooter = styled.footer`
  width: 100%;
  height: auto;

  #active {
    background-color: #1d555e;
    padding: 20px;
    display: flex;
    border-radius: 15px;
  }

  @media (min-width: 1129px) {
    ul {
      display: none;
    }
  }
  @media (max-width: 650px), (max-width: 750px), (max-width: 1133px) {
    ul {
      display: inline;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 50px;
      border-radius: 15px;
      margin-top: 20px;
      width: 100%;
      height: 100px;
      background-color: rgb(56, 148, 143);
      box-shadow: #d8e9e6 16px 16px 32px, rgba(0, 0, 0, 0.12) 0px -16px 32px,
        rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;

export { ContainerFooter };
