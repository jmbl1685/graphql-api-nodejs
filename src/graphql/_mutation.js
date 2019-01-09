exports.CreateMovie = async (parent, args, { Movie }) => {
  const movie = await new Movie(args).save();
  movie._id = movie._id.toString();
  return movie;
};

exports.DeleteMovie = async (parent, args, { Movie }) => {
  return await Movie.findByIdAndRemove(args);
};

exports.UpdateMovie = async (parent, args, { Movie }) => {
  return await Movie.findByIdAndUpdate(args._id, { $set: args }, { new: true });
};
