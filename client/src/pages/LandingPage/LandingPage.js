import React from "react";
import axios from "axios";

import {
  Layout,
  Slider,
  DealAdvertGif,
  CardTags,
  GroupCard,
  LatestDeals,
  Popularcategory,
  CategoryBanner,
  AdsBanner,
  Branddetails,
  RecommendedProducts,
  ProductBanner,
  Brandlogo,
  SponsoredProducts,
  BestSellingProducts
} from "../../imports";

import classes from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <Layout>
      <section className={classes.Section1}>
        <div className={classes.Slider}>
          <Slider />
        </div>
        <div className={classes.DealAdvertGif}>
          <DealAdvertGif />
        </div>
      </section>
      <section className={classes.OtherSection}>
        <CardTags />
        <GroupCard />
        <RecommendedProducts />
        {/* <SponsoredProducts />
        <LatestDeals />*/}
        <ProductBanner />
        <Popularcategory />
        <AdsBanner />
        <BestSellingProducts />
        <CategoryBanner />
        <Branddetails />
        <Brandlogo />
      </section>
    </Layout>
  );
};

export default LandingPage;
