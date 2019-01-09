"use strict";

const express = require("express");
const cors = require("cors");
const config = require("../src/config/config");
const graphiqlExpress = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");
const { importSchema } = require("graphql-import");
const Movie = require("../src/models/movie");
const resolvers = require("./graphql/resolvers");
const typeDefs = importSchema(`${__dirname}/graphql/schema.graphql`);

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use(cors());
app.set("port", process.env.port || 3000);

app.use(
  "/graphql",
  express.json(),
  graphiqlExpress({
    schema,
    context: {
      Movie
    },
    graphiql: true
  })
);

app.listen(app.get("port"), () => console.log("Server running"));
