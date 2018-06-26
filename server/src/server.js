'use strict'

import express from 'express'
import config from '../src/config/config'
import graphiqlExpress from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { importSchema } from 'graphql-import'

import Movie from '../src/models/movie'
import resolvers from './graphql/resolvers'
const typeDefs = importSchema(`${__dirname}/graphql/schema.graphql`)

const app = express()

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})

app.use('/graphql', express.json(), graphiqlExpress({
    schema,
    context: {
        Movie
    },
    graphiql: true
}))

app.listen(config.port, () =>
    console.log(config.messages.APP_RUNNING))