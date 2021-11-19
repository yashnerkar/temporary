import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import ExpenseDash from "/src/components/ExpenseDash";
import Addexpense from "/src/components/Addexpense";
import Editexpense from "/src/components/Editexpense";
import Help from "/src/components/Help";
import NotFoundPage from "/src/components/NotFoundPage";
import Header from "/src/components/Header";

const AppRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<ExpenseDash />} exact={true} />{" "}
      <Route path="/create" element={<Addexpense />} />{" "}
       <Route path="edit">
       <Route path=":id" element={<Editexpense />} />
      </Route>
      <Route path="/help" element={<Help />} />{" "}
      <Route element={<NotFoundPage />} />{" "}
    </Routes>{" "}
  </Router>
);
export default AppRouter;
