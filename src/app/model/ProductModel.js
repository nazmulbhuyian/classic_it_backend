
const mongoose = require("mongoose");

// Product Schema and connect DB collection
const productSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    title: {
        required: true,
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    variation: [
        {
            color: String,
            size: String,
            quantity: Number
        }
    ]
},
{
    timestamps: true
})

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;