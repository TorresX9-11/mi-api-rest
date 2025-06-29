const mongoose = require('mongoose');

const servicioSchema = new mongoose.Schema({
  motoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Moto', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  descripcion: { type: String, required: true },
  fecha: { type: Date, required: true },
  costo: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Servicio', servicioSchema);
