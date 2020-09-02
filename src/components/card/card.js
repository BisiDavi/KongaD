import React from "react";

import classes from "./card.module.css";


const Card = (props) => {
  return (
    <div style={{ height: props.height }} className={classes.Card}>
      {props.name}
    </div>
  );
};

export default Card;
