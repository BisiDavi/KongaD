import React from "react";
import { LazyLoadImage } from "../../imports";

import classes from "./hovercard.module.css";

const HoverCard = props => {
  const subCategory = props.subCategories.slice(0, 3);
  return (
    <div className={classes.hovercard}>
      <LazyLoadImage
        publicId={props.imgsrc}
      />
      <h3>{props.name}</h3>
      <div className={classes.showonhover}>
        <div className={classes.header}>
          <h3>{props.name}</h3>
          <LazyLoadImage
            publicId={props.thumbnail}
          />
        </div>
        <div className={classes.body}>
          {subCategory.map(subcategory => (
            <li>{subcategory}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
