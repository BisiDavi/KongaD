import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from '../../imports/.';

import classes from './slider.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slidersPublicId = ["konga/Nivea_blvhmn.jpg", "konga/evaslides_aew4uja",
  "konga/frutta_zwgkth", "konga/direct-from-samsung-abanner_uho5uj"];

const displaySlider = slidersPublicId.map(imageID => (
  <div key={imageID}>
    <LazyLoadImage
      publicId={imageID}
    />
  </div>
))

const Slider = () => {
  return (
    <Carousel
      className={classes.Carousel}
      autoPlay
      showStatus={false}
      infiniteLoop
      useKeyboardArrows
      transitionTime={1000}
      showThumbs={false}>
      {displaySlider}
    </Carousel>
  )
}
export default Slider;