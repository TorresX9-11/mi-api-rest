// VALIDADORES DE MOVIE DESACTIVADOS POR CAMBIO DE ENFOQUE A MOTOS
const Joi = require('joi');
exports.movieSchema = Joi.object({
title: Joi.string().required(),
year: Joi.number().integer().required(),
genre: Joi.string().optional()
})