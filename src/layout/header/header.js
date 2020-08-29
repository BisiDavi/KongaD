import React from 'react';
import { makeStyles } from '@material-ui/core';

import { Navbar, KongaCategory, LazyLoadImage, Navigation } from '../../imports/.';

const useStyles = makeStyles({
  headerGif: {
    width: '100%',
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <LazyLoadImage
          height={50}
          className={classes.headerGif}
          publicId="konga/topheadergif_n2tzfm.gif" />
      </div>
      <KongaCategory />
      <Navigation />
      <Navbar />
    </div>
  )
}

export default Header;
