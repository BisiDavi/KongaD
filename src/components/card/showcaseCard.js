import React from 'react'
import { LazyLoadImage } from "../../imports";
import {Paper} from '@material-ui/core';
import classes from "./showcaseCard.module.css";


const ShowcaseCard = (props) => {
    return (
      <Paper className={classes.ShowcaseCard}>
        <div className="percentage">
          {props.percent}
        </div>
        <LazyLoadImage
          width={props.width}
          height={props.imgheight}
          publicId={props.img}
        />
        <h3>{props.name}</h3>
        <div className="price">
          <h1>₦{props.price}</h1>
          <h5>₦{props.formerPrice}</h5>
          <p>You save ₦{props.save} </p>
        </div>
      </Paper>
    );
}

export default ShowcaseCard
