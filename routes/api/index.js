const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes); // we take the endpoints and prefix them with the path of /users
router.use('/posts', postRoutes);
router.use('./comments', commentRoutes);

module.exports = router;