const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes); // we take the endpoints and prefix them with the path of /users

module.exports = router;