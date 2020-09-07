import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/admin/dashboard" },
  { name: "Products", path: "/admin/products" },
  { name: "Settings", path: "/admin/settings" }
];

const DashboardSidebar = () => {
    
  const renderSidebarLink = () => {
    return navLinks.map(link => (
      <li key={link.name}>
        <Link to={link.path}>{link.name}</Link>
      </li>
    ));
  };

  return <div>{renderSidebarLink()}</div>;
};

export default DashboardSidebar;
