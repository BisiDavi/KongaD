import React from "react";
import { Card } from "../../imports";
import classes from "./cardtags.module.css";

const CardTags = () => {
  return (
    <div className={classes.cardtags}>
      <Card name="Konga" height="50px" />
      <Card name="Get up 2 2k" height="50px" />
      <Card name="Konga Affliate" height="50px" />
      <Card name="Return Policy" height="50px" />
      <Card name="Free shipping" height="50px" />
      <Card name="Store Locator" height="50px" />
    </div>
  );
};

export default CardTags;
