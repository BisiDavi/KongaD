import React from 'react';
import HorizontalScroller from "react-horizontal-scroll-container";
import { ProductCard } from "../../../imports";
import classes from './bestSelling.module.css'

const productData = [
  {
    name: "2 in 1 Inverter Motor washing",
    img: "2_in_1_inverter_motor_washing_fzkblx",
    price: 170000,
    formerPrice: 180000
  },
  {
    name: "Blaze smart fitness watch",
    img:
      "Blaze-Smart-Fitness-Watch---Gunmetal-7405545_yupykp",
    price: 109000,
    formerPrice: 125000
  },
  {
    name: "Blaze smart fitness watch - gunmetal",
    img:
      "Charge-2---Heart-Rate-and-Fitness-Wristband-7405349_bjzkia",
    price: 115000,
    formerPrice: 125000
  },
  {
    name: "Sadia kitchen, dining table and chair",
    img: "",
    price: 195000,
    formerPrice: null
  },
  {
    name: "D-jack Home theatre",
    img: "D-jack_home_theatre_qrtbln",
    price: 80000,
    formerPrice: 82000
  },
  {
    name: "Suit Bag Hangers",
    img: "suit_bag_hangers_rjfno3",
    price: 9000,
    formerPrice: null
  },
  {
    name: "Samsung 32 Led TV",
    img: "samsung_32_led_dqwdno",
    price: 165000,
    formerPrice: null
  },
  {
    name: "Rechargeable Bluetooth speaker",
    img: "rechargeable_bluetooth_noauvp",
    price: 95000,
    formerPrice: null
  },
  {
    name: "5 Burner Electric Oven",
    img: "5_burner_electric_oven_i6wki3",
    price: 106000,
    formerPrice: 110500
  },
  {
    name: "Gionee S11 lite phone",
    img: "s11_lite_teqm8e",
    price: 36000,
    formerPrice: 48000
  }
];

const BestSellingProducts = () => {
    return (
      <div className={classes.bestSelling}>
        <HorizontalScroller>
          {productData.map(pdtData => {
            return (              
              <ProductCard
                key={pdtData.name}
                imgsrc={`konga/${pdtData.img}`}
                width="50%"
                imgheight="50%"
                height="200px"
                name={pdtData.name}
                price={pdtData.price}
                formerPrice={pdtData.formerPrice}
              />
            );
          })}
        </HorizontalScroller>
      </div>
    );
}

export default BestSellingProducts
