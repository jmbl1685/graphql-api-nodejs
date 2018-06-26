'use strict'

export default {
    CreateMovie: async (parent, args, { Movie }) => {
        const movie = await new Movie(args).save()
        movie._id = movie._id.toString()
        return movie
    },
    DeleteMovie: async (parent, args, { Movie }) => {
        return await Movie.findByIdAndRemove(args)
    },
    UpdateMovie: async (parent, args, { Movie }) => {
        return await Movie.findByIdAndUpdate(args._id, { $set: args }, { new: true })
    }
}