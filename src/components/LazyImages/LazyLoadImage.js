import React from 'react';
import { Image } from 'cloudinary-react';
import LazyLoad from 'react-lazyload';



const LazyLoadImage = (props) => (
  <LazyLoad height={props.height} once>
    <Image
      height={props.imgheight}
      width={props.width}
      publicId={props.publicId}
      cloudName="verrb-inc"
      className={props.className} />
  </LazyLoad>
)

export default LazyLoadImage;