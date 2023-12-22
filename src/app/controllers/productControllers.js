const sendResponse = require("../../shared/sendResponse");
const { postProductServices, getAllProductItem, getAProductItem } = require("../services/productServices");

// upload item in Product
exports.postProductItem = async (req, res) => {
    try {
        const data = req.body;
        const result = await postProductServices(data);

        if (!result) {
            sendResponse(res, {
                statusCode: 400,
                success: false,
                message: 'Product Item Not Added. Something Wrong'
            });
        } else {
            sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'Product Item Added Successfully',
                data: result
            });
        }

    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: 'Something went Wrong'
        });
    }
};

// Get All Product information
exports.getAllProductInfo = async (req, res) => {
    try {
        const result = await getAllProductItem();
        if (!result) {
            return sendResponse(res, {
                statusCode: 400,
                success: false,
                message: 'Nothing Found'
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Successfully Get',
            data: result
        });

    } catch (error) {
        console.log(error);
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: 'Something went Wrong'
        });
    }
}

// Get A Product information
exports.getAProductInfo = async (req, res) => {
    try {
        const productId = req.params.productId;
        const result = await getAProductItem(productId);
        if (!result) {
            return sendResponse(res, {
                statusCode: 400,
                success: false,
                message: 'Nothing Found'
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: 'Successfully Get',
            data: result
        });

    } catch (error) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: 'Something went Wrong'
        });
    }
}