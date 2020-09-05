import React from "react";
import { ProductCard } from "../../../imports";
import classes from "./latestdeals.module.css";

const dealsData = [
  {
    name: 'Samsung 32" LED TV',
    price: 58000,
    formerPrice: 72250,
    img: "samsung_32_led_dqwdno"
  },
  {
    name: "DJ-5060BT Home Theatre System.",
    price: 40500,
    formerPrice: 49420,
    img: "D-jack_home_theatre_qrtbln"
  },
  {
    name: "Solstar 32' Led Tv",
    price: 46500,
    formerPrice: 60040,
    img: "solstar_led_tv_u8bkq3"
  },
  {
    name: "iTec 32' Hd Led With Free Wall B",
    price: 39500,
    formerPrice: 49500,
    img: "iTec32_tv_gvu0ti"
  },
  {
    name:
      "3.1 X-bass Bluetooth Home Theatre System - Dj-603.",
    price: 19050,
    formerPrice: 23500,
    img: "Djack_bluetooth_wz1ooi"
  },
  {
    name: "Indomie Indomitable Pack = 70g",
    price: 2300,
    formerPrice: 2400,
    img: "indomie_im1id7"
  }
];

const LatestDeals = () => {
  return (
    <section className={classes.LatestDeals}>
      <div className={classes.header}>
        <h3>Latest Deals</h3>
        <p>See all items</p>
      </div>
      <hr />
      <div className={classes.dealcards}>
        {dealsData.map(dData => {
          const saved = dData.formerPrice - dData.price;
        return (
          <ProductCard
            key={dData.name}
            name={dData.name}
            width="50%"
            imgheight="50%"
            price={dData.price}
            formerPrice={dData.formerPrice}
            save={`You save ₦${saved}`}
            imgsrc={`konga/${dData.img}`}
          />
        ); 
       })  
      }
      </div>
    </section>
  );
};

export default LatestDeals;
