import React from 'react';
import { Image } from 'cloudinary-react';
import LazyLoad from 'react-lazyload';
import Skeleton from '@material-ui/lab/Skeleton';

const LazyLoadImage = props =>
  <LazyLoad height={props.height} once>
    <Image
      height={props.imgheight}
      width={props.width}
      publicId={props.publicId}
      cloudName="verrb-inc"
      className={props.className}
    />
  </LazyLoad> ? (
    <LazyLoad height={props.height} once>
      <Image
        height={props.imgheight}
        width={props.width}
        publicId={props.publicId}
        cloudName="verrb-inc"
        className={props.className}
      />
    </LazyLoad>
  ) : (
    <Skeleton
      animation="wave"
      variant="rect"
      width="100%"
    >
      <LazyLoad height={props.height} once>
        <Image
          height={props.imgheight}
          width={props.width}
          publicId={props.publicId}
          cloudName="verrb-inc"
          className={props.className}
        />
      </LazyLoad>
    </Skeleton>
  );

export default LazyLoadImage;