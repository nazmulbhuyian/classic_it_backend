const ApiError = require("../../errors/ApiError");
const { getMeUsersService } = require("../services/userGetMeServices");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const { promisify } = require('util');

// Find A User For FrontEnd Whole Page Excess For Context.
exports.getMeUser = async (req, res, next) => {
    try {
        // const token = req.headers?.authorization;
        const token = await req.headers?.authorization?.split(" ")?.[1];
 
        if (!token) {
            throw new ApiError(400, 'Invalid User !')
        }

        const decode = await promisify(jwt.verify)(token, process.env.ACCESS_TOKEN);

        const user = await getMeUsersService(decode.email);

        if (user) {
            return res.status(200).json({
                success: true,
                email: decode.email,
                userRole: user.role,
                userName: user.name
            })
        }
        throw new ApiError(400, 'Token is not valid !')

    } catch (error) {
        next(error)
    }
}