const winston = require("winston");
const express = require("express");
const app = express();

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();
require("./startup/prod")(app);

const port = process.env.PORT || 80;
const server = app.listen(port, () =>
    winston.info(`listening on port ${port} ...`)
);

module.exports = server;