
const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const cookieParser = require('cookie-parser');

const defaultTitle = require('../middlewares/defaultTitle');
const auth = require('../middlewares/auth');

const jwtSecret = 'super secter';

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);

    //app.set - if we call render home without extention it will automatically attach .hbs to it
    app.set('view engine', '.hbs');

    app.use(express.urlencoded({ extended: true }));
    app.use('/static', express.static('static'));
    app.use(cookieParser());
    app.use(auth(jwtSecret));

    app.use(defaultTitle('HomeMade AirBNB'));
};
