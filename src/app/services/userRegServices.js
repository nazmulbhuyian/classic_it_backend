const UserModel = require("../model/UserModel");


// Find A User is Exist ?
exports.getFindOneRegUserServices = async (email) => {
    const FindUser = await UserModel.findOne({ email: email });
    return FindUser;
}

// Registration A User
exports.postRegUserServices = async (data) => {
        const createUser = await UserModel.create(data);
        return createUser;
}
