'use strict'

import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/Movies')
  .catch(err => console.log(chalk.red('ERROR: Failed connection [mongodb]')))

export default {
  port: process.env.PORT || 3000,
  db: mongoose,
  messages: {
    APP_RUNNING: 'Server running'
  }
}