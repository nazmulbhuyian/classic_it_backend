const express = require("express");
const { postProductItem, getAllProductInfo, getAProductInfo } = require("../controllers/productControllers");
const router = express.Router();

// Get and post product
router.route('/').post(postProductItem).get(getAllProductInfo);

// Get single product item
router.route('/:productId').get(getAProductInfo);

const ProductRoutes = {
    router
};

module.exports = ProductRoutes;