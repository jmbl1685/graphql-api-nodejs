'use strict'

import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Movies')

export default {
  port: process.env.PORT || 3000,
  db: mongoose,
  messages: {
    APP_RUNNING: 'Server running'
  }
}