const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes); // collecting the packaged group of API endpoints and prefixing them with the path /api

router.use((req, res) => { // if we make a request to any endpoint that doesnt exist, we will receive a 404 error
    res.status(404).end();
});

module.exports = router;