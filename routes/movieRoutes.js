const express = require('express');
const router = express.Router();
const {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie
} = require('../controllers/movieController');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');
const { movieSchema } = require('../validators/movieValidator');

router.use(auth); // Todas las rutas protegidas
router.post('/', validate(movieSchema), createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);
router.put('/:id', validate(movieSchema), updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;