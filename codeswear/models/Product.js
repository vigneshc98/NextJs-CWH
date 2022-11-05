const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {type:String, required: true},
    slug: {type:String, required:true, unique:true},
    desc: {type:String},
    img: {type:String},
    category: {type:String, },
    size: {type:String},
    color: {type:String},
    price: {type:Number, required:true},
    availableQty: {type:Number, required:true},
},{timestamps: true});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);