const ApiError = require("../../errors/ApiError");
const sendResponse = require("../../shared/sendResponse");
const { postCartServices, getACartItem, deleteACartItem } = require("../services/cartServices");

// upload item in Cart
exports.postCartItem = async (req, res) => {
    try {
        const data = req.body;
        const result = await postCartServices(data);

        if (!result) {
            sendResponse(res, {
                statusCode: 400,
                success: false,
                message: 'Cart Item Not Added. Something Wrong'
            });
        } else {
            sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'Cart Item Added Successfully',
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

// Get All Cart information
exports.getACartInfo = async (req, res) => {
    try {
        const email = req.params.email;
        const result = await getACartItem(email);
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

// Get A Cart information
exports.deleteACartInfo = async (req, res) => {
    try {
        const id = req.body.id;
        const result = await deleteACartItem(id);
        if (result.deletedCount > 0) {
            sendResponse(res, {
                statusCode: 200,
                success: true,
                message: 'Successfully Delete',
                data: result
            });
        } else {
            throw new ApiError(400, 'Cart Delete failed !')
        }
    } catch (error) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: 'Something went Wrong'
        });
    }
}
