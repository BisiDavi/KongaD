import React from 'react'
import { LazyLoadImage } from '../../imports'
import { Paper } from '@material-ui/core'

const ProductBanner = () => {
    return (
        <Paper>
            <LazyLoadImage 
            publicId="konga/purify-sanitizer.jpg_r1PDUVaQP_omk7yl" />
        </Paper>
    )
}

export default ProductBanner
