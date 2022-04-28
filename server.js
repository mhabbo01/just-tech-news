const express = require('express');
const routes = require('./routes'); // collected all the routes and packaged them up
const sequelize = require('./config/connection'); //importing the connection to Sequelize from here

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {  // sequelize.sync establishes the connection to the database and takes the models and connects to associated database tables.
    app.listen(PORT, () => console.log('Now Listening'));
});