const mongoose = require('mongoose');
const Product =  mongoose.Schema;

const ProductSchema = new Product({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    formerPrice:{
        type:Number,
    },
    brand:{
        type:String
    },
    img:{
        type:String
    },
    category:{
        type:String
    },
    subcategory:{
        type:String
    },
    description:{
        type:String
    }
});

module.exports = mongoose.model('Product',ProductSchema)