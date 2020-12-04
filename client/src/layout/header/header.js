import React from "react";

import { Navbar, KongaCategory, Navigation, PromoBanner } from "../../imports";

const Header = () => {
  return (
    <div>
      <PromoBanner
        bannerImage="konga/konga_banner_kfmbp8.WebP"
        bannerHeight="40px"
      />
      <KongaCategory />
      <Navigation />
      <Navbar />
    </div>
  );
};

export default Header;
