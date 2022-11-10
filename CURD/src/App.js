import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import HomePage from "./components/pages/HomePage";

import "./App.css";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
import EmpEdit from "./EmpEdit";

{
  /* <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="employee/create" element={<EmpCreate />}></Route>
          <Route path="employee/detail/:empid" element={<EmpDetail />}></Route>
          <Route path="employee/edit/:empid" element={<EmpEdit />}></Route>
        </Routes>
        </BrowserRouter> */
}

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/home" component={HomePage} />

          <Route path="/emp" component={EmpListing} />
          <Route path="/create" component={EmpCreate}></Route>
          <Route path="/detail/:empid" component={EmpDetail}></Route>
          <Route path="/edit/:empid" component={EmpEdit}></Route>
        </Switch>
      </div>
    </Router>
  );
}
