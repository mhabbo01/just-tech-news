const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');

router.use('/users', userRoutes); // we take the endpoints and prefix them with the path of /users
router.use('/posts', postRoutes);

module.exports = router;