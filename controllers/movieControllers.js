// CONTROLADORES DE MOVIES DESACTIVADOS POR CAMBIO DE ENFOQUE A MOTOS

// const Movie = require('../models/Movie');

// exports.createMovie = async (req, res, next) => {
//     try {
//         const movie = new Movie(req.body);
//         await movie.save();
//         res.status(201).json(movie);
//     } catch (err) {
//     next(err);
//     }
// };

// exports.getMovies = async (req, res, next) => {
//     try {
//         const movies = await Movie.find();
//         res.json(movies);
//     }   catch (err) {
//         next(err);
//     }
// };

// exports.getMovieById = async (req, res, next) => {
//     try {
//         const movie = await Movie.findById(req.params.id);
//         if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
//         res.json(movie);
//     }   catch (err) {
//         next(err);
//     }
// };

// exports.updateMovie = async (req, res, next) => {
//     try {
//         const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true
// });
//         if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
//         res.json(movie);
//     }   catch (err) {
//         next(err);
//     }
// };

// exports.deleteMovie = async (req, res, next) => {
//     try {
//         const movie = await Movie.findByIdAndDelete(req.params.id);
//         if (!movie) return res.status(404).json({ error: 'Película no encontrada' });
//         res.json({ message: 'Película eliminada' });
//     }   catch (err) {
//         next(err);
//     }
// };