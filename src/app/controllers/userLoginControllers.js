
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const jwt = require('jsonwebtoken');
const ApiError = require('../../errors/ApiError');
const { getLogUsersService } = require("../services/userLoginServices");

exports.postLogUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new ApiError(400, 'Please Provide A Email !')
        }

        const user = await getLogUsersService(email)
        if (!user) {
            throw new ApiError(400, "user get Failed")
        }
        const isPasswordValid = await bcrypt.compare(password, user?.password);

        if (!isPasswordValid) {
            throw new ApiError(400, "Password Not Match")
        }

        const token = jwt.sign({ email }, process.env.ACCESS_TOKEN);
        return res.send({ 
            lluMeMallLoginToken: token,
            message: "Successfully Login",
            success: true,
            statusCode: 200,
         })

    } catch (error) {
        next(error)
    }
}