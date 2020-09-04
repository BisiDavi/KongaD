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

const hoverCardData = [
  { name: "Computers and Accessories", imgsrc: "", thumbnail: "", subCategories: computer_accessories},
  { name: "Phones and Tablet", imgsrc: "", thumbnail: "", subCategories: phones_tablet},
  { name: "Electronics", imgsrc: "", thumbnail: "", subCategories: electronic},
  { name: "Konga Fashion", imgsrc: "", thumbnail: "", subCategories: fashion},
  { name: "Home and Kitchen", imgsrc: "", thumbnail: "", subCategories: Home_kitchen},
  { name: "Baby, Kids and Toys", imgsrc: "", thumbnail: "", subCategories: babytoys},
  { name: "Wine & Other Categories", imgsrc: "", thumbnail: "", subCategories: wine},
  { name: "Beauty,Health & Personal Care", imgsrc: "", thumbnail: "", subCategories: Beauty_Health_Personal_Care},
  { name: "Sports and Fitness", imgsrc: "", thumbnail: "", subCategories: Outdoor_Indoor_Games},
  { name: "Automotive", imgsrc: "", thumbnail: "", subCategories: Automotive},
]

const Popularcategory = () => {
  return (
    <div className={classes.Popularcategory}>
      {hoverCardData.map(cardData => (
        <HoverCard
          name={cardData.name}
          imgsrc=""
          imgalt=""
          thumbnail=""
          subCategories={cardData.subCategories}
        />
      ))}
    </div>
  );
};

export default Popularcategory;
