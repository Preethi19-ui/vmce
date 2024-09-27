import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productPrice:{
        type:Number,
        required:true,
    },
    productImage:{
        type:String,
        required:true,
    },

})
const Products = mongoose.model("products",ProductSchema)

export default Products;