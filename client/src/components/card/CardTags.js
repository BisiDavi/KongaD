import React from "react";
import { Card } from "../../imports";
import classes from "./cardtags.module.css";

const cardImagesID = [
{path:"konga/konga_travel_muxzo3.png", width:"100px"},
{path:"konga/miniService_kongaPay_zhswha.jpg", width:"150px"},
{path:"konga/konga-affliates_h40acb.png", width:"160px"},
{path:"konga/Free-Shipping_xsyw6x.png", width:"150px"}, 
{path:"konga/return-policy_vmtor7.png", width:"150px"},
{path:"konga/Store-Locator_jiluds.png", width:"150px"}
]

const CardTags = () => {
  return (
    <div className={classes.cardtags}>
      {cardImagesID.map((imgID) => (
        <Card 
        key={imgID.path}
        publicId={imgID.path} 
        height="50px" 
        imgWidth={imgID.width} />
      ))}      
    </div>
  );
};

export default CardTags;
