require("dotenv").config();
const debug = require("debug")("kinds:server");
const chalk = require("chalk");
const express = require("express");
const helmet = require("helmet");
const { notFoundError, generalError } = require("./middlewares/errors");
const joselito = require("./middlewares/loggers/joselito");
const router = require("./routes/kindsRouter");

const app = express();

const startServer = (port) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.yellow(`Server listening on http://localhost:${port}`));
      resolve();
    });

    server.on("error", (error) => {
      reject(error);
    });
  });

app.use(joselito);
app.use(express.json());
app.use(helmet());

app.use("/kinds", router);

app.use(notFoundError);
app.use(generalError);

module.exports = startServer;
