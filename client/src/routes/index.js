import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  LandingPage,
  BabyToys,
  Computers,
  Electronics,
  Fashion,
  HomeKitchen,
  Phones,
  WineOtherCategories,
  AdminLogin,
  AdminRegister,
  UserRegister,
  UserLogin,
  Dashboard,
  Product,
  Settings,
  Signin,
  Login,
  MainDashboard
} from "../imports";
import { navLinks } from "../components/navigation/Navbar";

const navComponents = [
  BabyToys,
  Computers,
  Electronics,
  Fashion,
  HomeKitchen,
  Phones,
  WineOtherCategories
];

const AppRoutes = () => {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          component={LandingPage}
        />        
        <Route
          path="/admin/dashboard"
          component={MainDashboard}
        />        
        <Route
          exact
          path="/admin"
          component={Login}
        />
        <Route
          path="/admin/register"
          component={Signin}
        />        
        <Route
          path="/account/login"
          component={UserLogin}
        />
        <Route
          path="/account/register"
          component={UserRegister}
        />
      </Router>
    </>
  );
};

export default AppRoutes;
