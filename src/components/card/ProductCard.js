import React from "react";
import classes from "./productcard.module.css";
import { LazyLoadImage } from "../../imports";

const ProductCard = (props) => {
  return (
    <div className={classes.productCard}>
      <LazyLoadImage 
      publicId={props.imgsrc} 
      width={props.width}
      imgheight={props.imgheight}
        />
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <h6>{props.formerPrice}</h6>
      <p>{props.save}</p>
    </div>
  );
};

export default ProductCard;
