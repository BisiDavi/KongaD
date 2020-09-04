import React from "react";
import { Header, Footer, Branddetails, Brandlogo } from "../imports/.";

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Brandlogo />
      <Branddetails />
      <Footer />
    </>
  );
};

export default Layout;
