import React from "react";
import classes from "./groupcard.module.css";
import { LazyLoadImage } from "../../imports";

const imgPublicID = ["konga/slippers_s1mcjc.png", "konga/indomitables_frchww.png", "konga/watches_x82qtg.png","konga/ladies_flat_lbndjc.png", "konga/kids_dress_pwzgz9.png", "konga/skin_care_fgivhs.png"]

const GroupCard = () => {
  return (
    <div className={classes.groupCard}>
      {imgPublicID.map(publicID => <LazyLoadImage key={publicID}
      publicId={publicID} width="100%" />)}
    </div>
  );
};

export default GroupCard;
