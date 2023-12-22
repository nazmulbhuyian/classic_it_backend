const express = require("express");
const { postRegUser } = require("../controllers/userRegControllers");
const router = express.Router();

// Registration A User
router.route('/').post(postRegUser);

const UserRegRoutes = {
    router
};

module.exports = UserRegRoutes;