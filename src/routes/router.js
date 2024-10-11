const bodyParser = require('express');
const userRoute = require('../routes/userRoute.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        userRoute

    );     
};