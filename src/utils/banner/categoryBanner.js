import React from 'react'
import { Paper } from '@material-ui/core';
import {LazyLoadImage} from '../../imports'
import classes from './categoryBanner.module.css'

const bannerData = [
  {
    img: "phones_csyjcr",
    category: "Phones",
    subcategory: "Geniune Mobile Phones"
  },
  {
    img: "indomie_pgu0xn",
    category: "Groceries",
    subcategory: "Shopping made easy!"
  },
  {
    img: "washing_machine_twyuaw",
    category: "Dryers & Washers",
    subcategory:
      "Cleaner Clothes, Higher efficiency"
  },
  {
    img: "appliances_hft5py",
    category: "Small Appliance",
    subcategory: "Little Home Helpers"
  }
];

const CategoryBanner = () => {
    return (
        <div className={classes.CategoryBanner}>
         { bannerData.map(bData => (
            <Paper key={bData.category}>
            <LazyLoadImage 
            publicId={`konga/${bData.img}.jpg`}
            width="100%" 
            imgheight="50%" 
            />
            <div>
                <h3>{bData.category}</h3>
                <p>{bData.subcategory}</p>
                <h6>SHOP NOW ></h6>
            </div>
            </Paper>))
            }
        </div>
    )
}

export default CategoryBanner;
