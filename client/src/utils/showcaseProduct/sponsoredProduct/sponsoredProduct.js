import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../../../store/actions/productActions";
import { ShowcaseCard } from "../../../imports";

import classes from "./sponsoredProduct.module.css";

const SponsoredProducts = props => {
  const products = [];
  const productData = [];

  useEffect(() => {
    props.dispatch(FetchProducts());
  }, []);

  const getSponsoredProducts = () => {
    props.product.map(product => {
      product.map(item => products.push(item));
    });
    products.forEach(item => {
      if (item.tag.includes("latest deals")) {
        return productData.push(item);
      }
    });
  };

  getSponsoredProducts();

  return (
    <div className={classes.SponsoredProducts}>
      {productData.map(pdtData => {
        const saved = pdtData.formerPrice - pdtData.price;
        return (
          <ShowcaseCard
            key={pdtData.name}
            img={`konga/${pdtData.img}`}
            width="50%"
            height="50%"
            name={pdtData.name}
            price={pdtData.price}
            formerPrice={pdtData.formerPrice}
            save={saved}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    product: state.ptr.products
  };
};

export default connect(mapStateToProps)(SponsoredProducts);
