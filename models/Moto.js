// Modelo de Moto adaptado desde Movie.js
const mongoose = require('mongoose');

const motoSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  anio: { type: Number, required: true },
  color: { type: String },
  precio: { type: Number }
});

module.exports = mongoose.model('Moto', motoSchema);
