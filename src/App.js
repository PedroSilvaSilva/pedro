import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/login";
import GlobalStyle from "./theme/globalstyles";
import { Provider } from "react-redux";
import store from "./organisms/redux/store";
import Layout from "./organisms/layout/dashboard";
import TermsAndConditions from "./organisms/terms/terms";
import Profile from "./pages/profile/profile";
import Createaccount from "./pages/createaccount/createaccount";
import Welcome from "./organisms/welcome/welcome";

const App = () => {
  return (
    <>
      <div>
        <button></button>
      </div>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/dashboard" element={<Layout />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<Createaccount />} />

            <Route
              path="/overview"
              element={<Navigate replace to="overview" />}
            />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
