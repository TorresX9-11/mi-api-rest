// MODELO DE MOVIE DESACTIVADO POR CAMBIO DE ENFOQUE A MOTOS
const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
title: { type: String, required: true },
year: { type: Number, required: true },
genre: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Movie', movieSchema);