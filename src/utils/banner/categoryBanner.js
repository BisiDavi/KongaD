import React from 'react'
import { Paper } from '@material-ui/core';
import {LazyLoadImage} from '../../imports'

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
        <div>
         { bannerData.map(bData => (
            <Paper>
            <LazyLoadImage publicId={`konga/${bData.img}.jpg`} />
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
