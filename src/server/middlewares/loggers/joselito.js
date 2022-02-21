const chalk = require("chalk");
const serverSays = require("debug")("kinds:logger:");

const joselito = (req, res, next) => {
  const { ip, method, path } = req;

  const startTime = new Date();
  res.once("finish", () => {
    const duration = new Date() - startTime;
    serverSays(
      chalk.bgYellowBright.black.bold(
        `${ip} ${method}  at ${path} ${duration} ms `
      )
    );
    serverSays("8=======================================D");
  });
  next();
};

module.exports = joselito;
