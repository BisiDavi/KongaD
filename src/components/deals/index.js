import React from "react";
import { ProductCard } from "../../imports";
import classes from "./latestdeals.module.css";

const LatestDeals = () => {
  return (
    <section className={classes.LatestDeals}>
      <div className={classes.header}>
        <h3>Latest Deals</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        <ProductCard
          name="Eva Water -75cl X 12 pieces"
          price="NGN 686"
          formerPrice="NGN 792"
          save="You save NGN 106"
        />
        <ProductCard
          name="5 alive Citrus Burst - 78cl X 6 pieces"
          price="NGN 1,626"
        />
        <ProductCard
          name="Power Oil 2.6l Pet Bottle Pure Vegetable Cooking oil"
          price="NGN 2,000"
        />
        <ProductCard
          name="Spaghetti - 475g (1 pack) Standard X 2 units"
          price="NGN 410"
        />
        <ProductCard name="Indomie Indomitable Pack = 70g" price="NGN 2300" />
        <ProductCard
          name="Frutta Natural Apple Juice - 1 Litre"
          price="NGN 3,300"
        />
      </div>
    </section>
  );
};

export default LatestDeals;
