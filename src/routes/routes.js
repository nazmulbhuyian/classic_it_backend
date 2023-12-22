const express = require('express');
const UserRegRoutes = require('../app/routes/userReg');
const UserLogInRoutes = require('../app/routes/userLogin');
const UserGetMeRoutes = require('../app/routes/getMe');
const ProductRoutes = require('../app/routes/productRoutes');
const cartRoutes = require('../app/routes/cartRoute');

const router = express.Router();

const moduleRoutes = [
  {
    path: '/userReg',
    route: UserRegRoutes.router,
  },
  {
    path: '/userLog',
    route: UserLogInRoutes.router,
  },
  {
    path: '/getMe',
    route: UserGetMeRoutes.router,
  },
  {
    path: '/product',
    route: ProductRoutes.router,
  },
  {
    path: '/cart',
    route: cartRoutes.router,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

module.exports = router;
