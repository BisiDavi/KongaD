import React from "react";
import {
  Layout,
  Slider,
  DealAdvertGif,
  CardTags,
  GroupCard,
  LatestDeals
} from "../imports/.";
// import { showMenu } from "../components/menu/menu";
// import { computersMenu } from "../components/menu/list/categoryList";
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
        {/* <Menu /> */}
        {/* {showMenu(computersMenu)} */}
        <CardTags />
        <GroupCard />
        <LatestDeals />
      </section>
    </Layout>
  );
};

export default LandingPage;
