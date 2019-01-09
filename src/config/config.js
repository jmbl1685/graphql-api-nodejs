"use strict";

const mongoose = require("mongoose");
const chalk = require("chalk");

require("now-env");

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGODB_CONNECTION | "mongodb://localhost:27017/Movies")
  .catch(err => console.log(chalk.red("ERROR: Failed connection [mongodb]")));

module.exports = {
  mongoose
};
