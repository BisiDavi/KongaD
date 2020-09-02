import React from "react";
import {DashboardHeader, DashboardSidebar } from "../../imports";

const DashboardLayout = props => {
  return (
    <>
      <DashboardHeader />
      {props.children}
      <DashboardSidebar />
    </>
  );
};

export default DashboardLayout;
