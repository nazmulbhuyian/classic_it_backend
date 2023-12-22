
const mongoose = require("mongoose");

// Cart Schema and connect DB collection
const cartSchema = new mongoose.Schema({
    owner_email: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    variationId: {
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
    price: {
        type: Number,
        required: true,
    },
    color: {
        required: true,
        type: String,
    },
    size: {
        type: Number,
        required: true,
    },
},
{
    timestamps: true
})

const CartModel = mongoose.model("carts", cartSchema);

module.exports = CartModel;