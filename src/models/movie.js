"use strict";

const { mongoose } = require("../config/config");

const Movie = new mongoose.Schema(
  {
    name: String,
    gender: String,
    ranking: Number,
    year_release: Number,
    cover: String
  },
  { versionKey: false }
);

module.exports = mongoose.model("Movie", Movie);
