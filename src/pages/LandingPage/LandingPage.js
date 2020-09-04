import React from "react";
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
  RecommendedProducts,
  ProductBanner,
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
        <RecommendedProducts />
        <SponsoredProducts />
        <LatestDeals />
        <GroupCard />
        <ProductBanner />
        <Popularcategory />
        <AdsBanner />
        <BestSellingProducts />
        <CategoryBanner />
      </section>
    </Layout>
  );
};

export default LandingPage;
