"use strict";

const mongoose = require("mongoose");
const chalk = require("chalk");

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://localhost:27017/Movies")
  .catch(err => console.log(chalk.red("ERROR: Failed connection [mongodb]")));

module.exports = {
  mongoose
};
