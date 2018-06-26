'use strict'

import mongoose from '../config/config'

const Movie = new mongoose.db.Schema({
    name: String,
    gender: String,
    ranking: Number,
    year_release: Number,
    cover: String
}, { versionKey: false })

export default mongoose.db.model('Movie', Movie)