import React from 'react';
import { LazyLoadImage} from '../../imports'
import { Paper } from '@material-ui/core';
import classes from "./banner1.module.css";


const imgPublicID = [
  "saveup_saf6k3",
  "electronics_eq4hjv"
];

const AdsBanner = () => {
    return (
      <div className={classes.Banner}>
        <Paper className={classes.Paper}>
        {imgPublicID.map( publicID => 
            <LazyLoadImage
            key={publicID}
            width="100%"            
            publicId={`konga/${publicID}`}
            />
          )}
        </Paper>
      </div>
    );
}

export default AdsBanner
