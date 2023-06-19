import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import { ThemeProvider } from "styled-components";

import Login from "_pages/login/login";
import Welcome from "_pages/welcome/welcome";
import Profile from "./pages/profile/profile";
import Dashboard from "_pages/dashboard/dashboard";
import Createaccount from "_pages/createaccount/createaccount";
import Task from "_pages/task/task";
import AddTask from "_pages/addtask/addtask";
import ResetPasswordForm from "_pages/forget/forget";

import GlobalStyle from "_theme/globalstyles";
import theme from "_theme/theme";

import store from "_store/store";

import Toolbar from "_components/molecules/toolbar/tolbar";

export const ThemeContext = createContext(null);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
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
          </Routes>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
