import React from "react";
import classes from "./style/styles.module.css";
import { LazyLoadImage } from "../../imports";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className={classes.dashboardHeader}>
      <div className="logo">
        <LazyLoadImage
          publicId="konga/konga_logo_f27l0w.webp"
          className="logo"
          height="40"
          width="128"
        />
      </div>
      <div className={classes.search}>
        <form>
          <input type="text" placeholder="search for products" />
        </form>
        <button>Search</button>
      </div>
      <div className={classes.user}>
        <div className="usericon">
          <strong>OD</strong>
        </div>
        <div className="signout">
          <Link to="/">Signout</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
