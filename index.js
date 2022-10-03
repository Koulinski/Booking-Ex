
const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const port = 3000;

async function start() {
    const app = express();
    expressConfig(app);
    routesConfig(app);
    await databaseConfig(app);

    app.listen(port, () => console.log(`Server is running and listening on port ${port}`));
}

start();