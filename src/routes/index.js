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
  Settings
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
        <Route exact path="/" component={LandingPage} />
        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/settings" component={Settings} />
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/register" component={AdminRegister} />
        <Route path="/admin/products" component={Product} />
        <Route path="/user/login" component={UserLogin} />
        <Route path="/user/register" component={UserRegister} />
      </Router>
    </>
  );
};

export default AppRoutes;
