import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
// import ReactSwitch from "react-switch";
import { ThemeProvider } from "styled-components";

import Login from "_pages/login/login";
import Welcome from "_pages/welcome/welcome";
import Profile from "_pages/profile/profile";
import Dashboard from "_pages/dashboard/dashboard";
import Createaccount from "_pages/createaccount/createaccount";
import Task from "_pages/task/task";

import ResetPasswordForm from "_pages/forget/forget";

import GlobalStyle from "_theme/globalstyles";
import theme from "_theme/theme";

import store from "_store/store";
import AddTask from "_pages/addtask/addtask";
import Toolbar from "_components/molecules/toolbar/tolbar";
import EdittaskFirebase from "_firebase/edittask/edittask.firebase";

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
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task />} />
              <Route path="/tolbar" element={<Toolbar />} />
              <Route path="/addtask" element={<AddTask />} />
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createaccount" element={<Createaccount />} />
              <Route path="/forget" element={<ResetPasswordForm />} />
              <Route path="/edittask" element={<EdittaskFirebase />} />
            </Routes>
          </ThemeContext.Provider>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
