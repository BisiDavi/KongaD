import React from "react";
import { LazyLoadImage } from "../../imports";
import { Paper, makeStyles } from "@material-ui/core";
// import

const ProductBanner = () => {
  return (
    <Paper style={{ margin: "20px", padding: "5px" }}>
      <LazyLoadImage publicId="konga/product_banner_vhyop6.WebP" width="100%" />
    </Paper>
  );
};

export default ProductBanner;
