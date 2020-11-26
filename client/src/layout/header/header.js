import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import {
  Navbar,
  KongaCategory,
  LazyLoadImage,
  Navigation
} from "../../imports";

const useStyles = makeStyles({
  headerGif: {
    width: "100%",
    position: "relative"
  },
  showPromoButton: {
    top: "5px",
    color: "white",
    right: "20px",
    cursor: "pointer",
    zIndex: "100",
    position: "absolute",
    height: "25px",
    width: "25px",
    background: "black",
    borderRadius: "50%"
  }
});

const Header = () => {
  const [showPromo, setShowPromo] = useState({
    promo: true,
    button: "grid"
  });
  const classes = useStyles();

  const showPromoHandler = () =>
    setShowPromo({
      promo: false,
      button: "none"
    });

  return (
    <div>
      <div>
        <button
          style={{ display: showPromo.button }}
          className={classes.showPromoButton}
          onClick={showPromoHandler}
        >
          X
        </button>
        {showPromo.promo ? (
          <LazyLoadImage
            height={50}
            className={classes.headerGif}
            publicId="konga/konga_banner_kfmbp8.WebP"
          />
        ) : null}
      </div>
      <KongaCategory />
      <Navigation />
      <Navbar />
    </div>
  );
};

export default Header;
