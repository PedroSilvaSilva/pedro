import React from "react";
import Login from "./pages/login";
import GlobalStyle from "./components/theme/globalstyles";
import Creataccount from "./pages/creataccount";
import Layout from "./pages/layout";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <Login /> */}
      {/* <Creataccount /> */}
      <Layout />
    </>
  );
}

export default App;
