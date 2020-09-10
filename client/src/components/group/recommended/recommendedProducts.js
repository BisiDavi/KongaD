import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FetchProducts } from "../../../store/actions/productActions";
import { ProductCard } from "../../../imports";
import classes from "./recommendedProducts.module.css";

const RecommendedProducts = props => {
  const products = [];
  const recommendedProductData = [];

  useEffect(() => {
    props.dispatch(FetchProducts());
  }, []);

  const getRecommendedProducts = () => {
    props.product.map(product => {
      product.map(item => products.push(item));
    });
    products.forEach(item => {
      if (item.tag.includes("Recommended Products")) {
        return recommendedProductData.push(item);
      }
    });
  };

  getRecommendedProducts();

  console.log("Recommended Products", recommendedProductData);

  return (
    <section className={classes.RecommendedProducts}>
      <div className={classes.header}>
        <h3>Recommended Products</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {recommendedProductData.map(rPData => {
          return (
            <ProductCard
              key={rPData.name}
              name={rPData.name}
              width="100%"
              imgheight="50%"
              price={rPData.price}
              formerPrice={rPData.formerPrice}
              imgsrc={`konga/${rPData.img}`}
            />
          );
        })}
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    product: state.ptr.products
  };
};

export default connect(mapStateToProps)(RecommendedProducts);
