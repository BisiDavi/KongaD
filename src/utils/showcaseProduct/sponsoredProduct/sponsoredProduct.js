import React from "react";
import { ShowcaseCard } from "../../../imports";

const productData = [
  {
    name: "Dining Table set",
    img: "dining_table_zzy5n8",
    price: 170000,
    formerPrice: 180000
  },
  {
    name: "Men's Formal Oxford Shoe Black",
    img:
      "Men-s-Formal-Oxford-Shoe---Black-5993232_7_jesfkg",
    price: 39000,
    formerPrice: 45000
  },
  {
    name: "Hisense 8kg Top Load",
    img: "hisense_8kg_top_load_tzdvuf",
    price: 115000,
    formerPrice: 125000
  },
  {
    name: "Wooden Spoons ",
    img: "wooden_spoons_uf78wg",
    price: 4000,
    formerPrice: null
  },
  {
    name: "Kitchen Towel 3-in-1",
    img:
      "Kitchen-Towel---3-in-1-6565980_1_xdbzaa",
    price: 2800,
    formerPrice: 3200
  },
  {
    name: "Home Theatre ",
    img: "Home_Theatre_f3aniu",
    price: 60000,
    formerPrice: null
  },
  {
    name: "Phone Accessories",
    img: "accessories_vgs7r3",
    price: 165000,
    formerPrice: null
  },
  {
    name: "Konga card",
    img: "konga_card_l8sobe",
    price: 1000,
    formerPrice: null
  },
  {
    name: "Pressing Iron",
    img: "iron_aiu9nc",
    price: 7000,
    formerPrice: 9500
  },
  {
    name: "OMO Multipurpose detergent",
    img: "omo_nwyghb",
    price: 1000,
    formerPrice: 12000
  }
];

const SponsoredProducts = () => {
  return (
    <div>
      {productData.map(pdtData => {
        const saved =
          pdtData.formerPrice - pdtData.price;
        return (
          <ShowcaseCard
            img={`konga/${pdtData.img}`}
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

export default SponsoredProducts;
