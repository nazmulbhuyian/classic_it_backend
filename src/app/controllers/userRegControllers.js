
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const sendResponse = require('../../shared/sendResponse');
const ApiError = require('../../errors/ApiError');
const { getFindOneRegUserServices, postRegUserServices } = require("../services/userRegServices");
const httpStatus = require("http-status");

// Registration A User
exports.postRegUser = async (req, res, next) => {
    try {
        const data = req.body;
        if (!data?.email) {
            throw new ApiError(400, 'Please Provide A Email !')
        }
        const inserted = await getFindOneRegUserServices(data?.email);
        if (inserted) {
            throw new ApiError(400, 'Previously Added !')
        }
        bcrypt.hash(data?.password, saltRounds, async function (err, hash) {
            const newUser = {
                email: data.email,
                password: hash,
                name: data.name,
                role: data?.role ? data?.role : "user"
            }
            try {
                const result = await postRegUserServices(newUser);
                sendResponse(res, {
                    statusCode: httpStatus.OK,
                    success: true,
                    message: 'User Added successfully !',
                    data: result,
                });
            } catch (error) {
                next(error);
            }
        });


    } catch (error) {
        next(error);
    }
}
