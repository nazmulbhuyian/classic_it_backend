const UserModel = require("../model/UserModel");

// Find A Single User.
exports.getMeUsersService = async (email) => {
    const users = await UserModel.findOne({email:email})
    return users;
}