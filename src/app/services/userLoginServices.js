const UserModel = require("../model/UserModel");


exports.getLogUsersService = async (email) => {
    const user = await UserModel.findOne({ email: email });
    return user;
}