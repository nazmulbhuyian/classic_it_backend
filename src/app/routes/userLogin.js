const express = require("express");
const { postLogUser } = require("../controllers/userLoginControllers");
const router = express.Router();

// Login A User
router.route('/').post(postLogUser);

const UserLogInRoutes = {
    router
};

module.exports = UserLogInRoutes;