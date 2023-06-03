import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import ReactSwitch from "react-switch";
import { ThemeProvider } from "styled-components";

import Login from "./components/molecules/login/login";
import store from "./components/molecules/redux/store";
import Layout from "./components/templates/layout/dashboard";

import TermsAndConditions from "./components/organisms/terms/terms";
import Welcome from "./components/organisms/welcome/welcome";

import Profile from "./pages/profile/profile";
import Createaccount from "./pages/createaccount/createaccount";
import Task from "./pages/task/task";
import Overview from "./pages/overview";

import GlobalStyle from "./theme/globalstyles";
import theme from "./theme/theme";

export const ThemeContext = createContext(null);

const App = () => {
  const [themeMode, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>
            {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/dashboard" element={<Layout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<Createaccount />} />
            </Routes>
          </ThemeContext.Provider>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
