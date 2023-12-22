const express = require("express");
const { postCartItem, getACartInfo, deleteACartInfo } = require("../controllers/cartControllers");
const router = express.Router();

// Get and post Cart
router.route('/').post(postCartItem).delete(deleteACartInfo);

// Get single Cart item
router.route('/:email').get(getACartInfo);

const cartRoutes = {
    router
};

module.exports = cartRoutes;