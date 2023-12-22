const express = require("express");
const { getMeUser } = require("../controllers/getMeControllers");
const router = express.Router();

// Get A User
router.route('/').post(getMeUser);

const UserGetMeRoutes = {
    router
};

module.exports = UserGetMeRoutes;