const ProductModel = require("../model/ProductModel");

// upload product
exports.postProductServices = async (data) => {
    const product = await ProductModel.create(data);
    return product;
}

// get all Product item
exports.getAllProductItem = async () => {
    const getAllProductData = await ProductModel.find({});

    const sendData = getAllProductData.map(product => ({
        productId: product._id,
        email: product.email,
        image: product.image,
        title: product.title,
        description: product.description,
        price: product.price,

        variation: product.variation.map(variation => ({
            color: variation.color,
            size: variation.size,
            image: variation.image,
            variation_id: variation._id,
            quantity: variation.quantity
        }))
    }));

    return sendData;
}



// get a Product item
exports.getAProductItem = async (productId) => {
    const getAProductData = await ProductModel.findOne({ _id: productId });

    if (!getAProductData) {
        return null;
    }

    const sendData = {
        productId: getAProductData._id,
        email: getAProductData.email,
        image: getAProductData.image,
        title: getAProductData.title,
        description: getAProductData.description,
        price: getAProductData.price,

        variation: getAProductData.variation.map(variation => ({
            color: variation.color,
            size: variation.size,
            variation_id: variation._id,
            quantity: variation.quantity
        }))
    };

    return sendData;
}

