import React from "react";
import { ProductCard } from "../../../imports";
import classes from "./recommendedProducts.module.css";

const recommendedProductsData = [
  {
    name: "Swiss Sd 510- Dual Sim- 8GB ROM",
    price: 14699,
    formerPrice: 72250,
    img: "swiss_sd_ws8os4"
  },
  {
    name: "Hennessy V.s.o.p - 70cl - Single",
    price: 22450,
    formerPrice: 25000,
    img: "hennessy_srrtev"
  },
  {
    name: "Samsung Galaxy Tab A 10.1 2019",
    price: 16000,
    formerPrice: 40000,
    img: "samsung_galaxy_tab_a_axpv3o"
  },
  {
    name: "Infinix Smart 4 X653-DUAL-16GB ",
    price: 38500,
    formerPrice: null,
    img: "infinix_smart_4_z7zghd"
  },
  {
    name: "Tecno Spark 4-kc8 - Dual Sim",
    price: 44999,
    formerPrice: null,
    img: "tecno_spark_wnenbc"
  },
  {
    name: "Wooden Spoons Set & Portable Mortal",
    price: 2550,
    formerPrice: 4000,
    img: "wooden_spoons_uf78wg"
  }
];

const RecommendedProducts = () => {
  return (
    <section
      className={classes.RecommendedProducts}
    >
      <div className={classes.header}>
        <h3>Latest Deals</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {recommendedProductsData.map(rPData => {
          const saved =
            rPData.formerPrice - rPData.price;
          return (
            <ProductCard
              name={rPData.name}
              price={rPData.price}
              formerPrice={rPData.formerPrice}
              save={`You save ₦${saved}`}
              imgsrc={`konga/${rPData.img}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedProducts;
