import React from "react";
import classes from "./popularcategory.module.css";
import {
  HoverCard,
  computer_accessories,
  phones_tablet,
  electronic,
  fashion,
  Home_kitchen,
  babytoys,
  wine,
  Beauty_Health_Personal_Care,
  Outdoor_Indoor_Games,
  Automotive
} from "../../imports";

const hoverCardData = [
  {
    name: "Computers and Accessories",
    imgsrc: "laptop_f8foe7.png",
    thumbnail: "computers_thumbnail_ggulg8.jpg",
    subCategories: computer_accessories
  },
  {
    name: "Phones and Tablet",
    imgsrc:
      "categoryBanners_smartphones_nohfad.png",
    thumbnail:
      "phones-and-tablets_thumbnail_ikkzft.png",
    subCategories: phones_tablet
  },
  {
    name: "Electronics",
    imgsrc:
      "categoryBanners_Electronics_l2fit3.jpg",
    thumbnail: "electronics_thumbnail_wqe3jn.png",
    subCategories: electronic
  },
  {
    name: "Konga Fashion",
    imgsrc: "categoryBanners_Fashion_vblab2.png",
    thumbnail: "fashion_thumbnail_erujyb.jpg",
    subCategories: fashion
  },
  {
    name: "Home and Kitchen",
    imgsrc: "categoryBanners_HK_uqnwso.jpg",
    thumbnail:
      "home-kitchen_thumbnail_du4dad.jpg",
    subCategories: Home_kitchen
  },
  {
    name: "Baby, Kids and Toys",
    imgsrc: "categoryBanners_BKT_nzohpj.jpg",
    thumbnail:
      "baby-kids-toys_thumbnail_tvbqsp.jpg",
    subCategories: babytoys
  },
  {
    name: "Wine & Other Categories",
    imgsrc:
      "categoryBanners_winesSpirits_p7dajo.jpg",
    thumbnail:
      "other-categories_thumbnail_qwipou.jpg",
    subCategories: wine
  },
  {
    name: "Beauty,Health & Personal Care",
    imgsrc:
      "categoryBanners_beauty_and_personal_care_hbln5c.png",
    thumbnail: "beauty-hc_thumbnail_gm1q4d.jpg",
    subCategories: Beauty_Health_Personal_Care
  },
  {
    name: "Sports and Fitness",
    imgsrc:
      "categoryBanners_sportsFitness_xvtxlx.jpg",
    thumbnail:
      "sports-and-fitness_thumbnail_uo8ydp.jpg",
    subCategories: Outdoor_Indoor_Games
  },
  {
    name: "Automotive",
    imgsrc: "categoryBanners_gen_anwast.jpg",
    thumbnail:
      "power-solutions_thumbnail_kcgjfi.jpg",
    subCategories: Automotive
  }
];

const Popularcategory = () => {
  return (
  <div className={classes.Popularcategory}>
      {hoverCardData.map(cardData => (
        <HoverCard
          key={cardData.name}
          name={cardData.name}
          imgsrc={`konga/${cardData.imgsrc}`}
          width="100%"
          imgheight="50%"
          thumbnail={`konga/${cardData.thumbnail}`}
          subCategories={cardData.subCategories}
        />
      ))}
    </div>
  );
};

export default Popularcategory;
