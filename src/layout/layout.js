import React from "react";
import { Header, Footer, Branddetails } from "../imports/.";

const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Branddetails />
      <Footer />
    </>
  );
};

export default Layout;
