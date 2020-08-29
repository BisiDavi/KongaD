import React from 'react';
import { LazyLoadImage } from '../../../imports/.';

import classes from './DealAdvertGif.module.css';


const gifs = ["konga/carouselAd1_kqhbdy.jpg", "konga/CarouselAd3_pyt725.gif",
  "konga/Samsung-phones-Carousel-Ad_zp8hpj.gif",
  "konga/sideCarousel_soundEquipment_bpgyeb.jpg"]

const displayGifs = gifs.map(gif => (
  <div key={gif}>
    <LazyLoadImage
      publicId={gif}      
    />
  </div>
))

const DealAdvertGif = () => {
  return (
    <div className={classes.DealAdvertGif}>
      {displayGifs}
    </div>
  )
}

export default DealAdvertGif;
