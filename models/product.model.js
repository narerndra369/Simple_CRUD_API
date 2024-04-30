const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
{
    ime: {
        type: Number,
        required: true,
        default:0
    },
    model: {
        type: String,
        required: [true, "Please enter Product Name"]
    },
    brand: {
        type: String,
        required: true,
        default:0
    },
    color: {
        type: String,
        required: true,
        default:0
    },
    ram: {
        type: String,
        required: true,
        default:0
    },
    storage: {
        type: String,
        required: true,
        default:0
    },
    price: {
        type: Number,
        required: true,
        default:0
    }
    
},
{
    timestamps:true
}
);

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;