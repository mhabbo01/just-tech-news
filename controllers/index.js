const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes); // routes to the homepage.handlebars

router.use('/api', apiRoutes); // collecting the packaged group of API endpoints and prefixing them with the path /api

//this needs to be last!
router.use((req, res) => { // if we make a request to any endpoint that doesnt exist, we will receive a 404 error
    res.status(404).end();
});



module.exports = router;