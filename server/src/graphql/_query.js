'use strict'

export default {
    GetMovie: async (parent, args, { Movie }) => {
        const movies = await Movie.find()
        return movies.map(item => {
            item._id = item._id.toString()
            return item
        })
    },
    GetMovieByID: async (parent, args, { Movie }) => {
         return await Movie.findById(args)
    }
}