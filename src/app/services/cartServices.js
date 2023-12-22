const CartModel = require("../model/CartModel");

// upload Cart
exports.postCartServices = async (data) => {
    const cart = await CartModel.create(data);
    return cart;
}

// get all Cart item
exports.getACartItem = async (email) => {
    const cart = await CartModel.find({user_email: email});
    return cart;
}

// delete a cart item
exports.deleteACartItem = async (id) => {
    const findCart= await CartModel.findOne({ _id: id });
    if (findCart) {
        const deleteCart = await CartModel.deleteOne(findCart, { runValidators: true });
        return deleteCart;
    }else{
        throw new ApiError(400, 'Cart Delete failed !')
    }
}
