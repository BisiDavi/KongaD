import React from "react";
import classes from "./popularcategory.module.css";
import {
  HoverCard,
  computer_accessories,
  phones_tablet,
  electronic,
  fashion,
  Home_kitchen,
  babytoys,
  wine,
  Beauty_Health_Personal_Care,
  Outdoor_Indoor_Games,
  Automotive
} from "../../imports";


const Popularcategory = () => {
  return (
    <div className={classes.Popularcategory}>
      <HoverCard
        name="Computers and Accessories "
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={computer_accessories}
      />
      <HoverCard
        name="Phones and Tablet"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={phones_tablet}
      />
      <HoverCard
        name="Electronics"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={electronic}
      />
      <HoverCard
        name="Konga Fashion"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={fashion}
      />
      <HoverCard
        name="Home and Kitchen"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={Home_kitchen}
      />
      <HoverCard
        name="Baby, Kids and Toys"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={babytoys}
      />
      <HoverCard
        name="Wine & Other Categories"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={wine}
      />
      <HoverCard
        name="Beauty,Health & Personal Care"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={Beauty_Health_Personal_Care}
      />
      <HoverCard
        name="Sports and Fitness"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={Outdoor_Indoor_Games}
      />
      <HoverCard
        name="Automotive"
        imgsrc=""
        imgalt=""
        thumbnail=""
        subCategories={Automotive}
      />
    </div>
  );
};

export default Popularcategory;
