import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ContainerMain = styled.div`
  :root {
    --main-radius: 5px;
    --main-padding: 5px;
  }

  display: grid;
  height: 100vh;
  grid-template-columns: 0.3fr 1fr 1fr 0.3fr;
  grid-template-rows: 0.1fr 1.5fr 1.2fr 0.8fr;
  grid-template-areas:
    "sidebar main main content1"
    "sidebar content2 content2 content1"
    "sidebar content2 content2 content1"
    "sidebar content2 content2 content1";
  grid-gap: 0.2rem;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 12px;
  color: #004d40;
  text-align: center;

  nav {
    grid-area: nav;
    border-radius: var(--main-radius);
    padding-top: var(--main-padding);
  }

  main {
    grid-area: main;
    border-radius: var(--main-radius);
    padding-top: var(--main-padding);
  }

  #sidebar {
    grid-area: sidebar;
    border-radius: var(--main-radius);
    padding-top: var(--main-padding);
  }

  #content1 {
    grid-area: content1;
    border-radius: var(--main-radius);
    padding-top: var(--main-padding);
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  #content2 {
    display: flex;
    flex-direction: row;
    background-color: white;
    grid-area: content2;
    border-radius: var(--main-radius);
    padding-top: var(--main-padding);
  }

  a {
    text-align: center;
    display: block;
    font-family: inherit;
    text-decoration: none;
    font-weight: bold;
    margin: 1rem;
  }
`;

export { Container, ContainerMain };
