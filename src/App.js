import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/molecules/login/login";
import GlobalStyle from "./components/templates/theme/globalstyles";
import { Provider } from "react-redux";
import store from "./components/molecules/redux/store";
import Layout from "./components/templates/layout/dashboard";
import TermsAndConditions from "./organisms/terms/terms";
import Profile from "./pages/profile/profile";
import Createaccount from "./pages/createaccount/createaccount";
import Welcome from "./organisms/welcome/welcome";
import Task from "./pages/task/task";
import Overview from "./pages/overview";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div id={theme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route exact path="/dashboard" element={<Layout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<Createaccount />} />
            </Routes>
          </ThemeContext.Provider>
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
        </Router>
      </Provider>
    </div>
  );
};

export default App;
