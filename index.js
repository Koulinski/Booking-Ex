
const express = require('express');
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const port = 3000;

const homeController = require('./controllers/homeController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const defaultController = require('./controllers/defaultController');
const defaultTitle = require('./middlewares/defaultTitle');

const app = express();

app.engine('.hbs', hbs.engine);

//app.set - if we call render home without extention it will automatically attach .hbs to it
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('static'));

app.use(defaultTitle('HomeMade AirBNB'));

app.use(homeController);
app.use('/catalog', catalogController);
app.use('/create', createController);
//attach at the end of all controllers
app.all('*', defaultController);

app.listen(port, () => console.log(`Server is running and listening on port ${port}`));