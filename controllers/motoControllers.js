// Controladores para motos adaptados desde movieControllers.js
const Moto = require('../models/Moto');

exports.getMotos = async (req, res, next) => {
  try {
    const motos = await Moto.find();
    res.json(motos);
  } catch (err) {
    next(err);
  }
};

exports.getMotoById = async (req, res, next) => {
  try {
    const moto = await Moto.findById(req.params.id);
    if (!moto) return res.status(404).json({ message: 'Moto no encontrada' });
    res.json(moto);
  } catch (err) {
    next(err);
  }
};

exports.createMoto = async (req, res, next) => {
  try {
    const moto = new Moto(req.body);
    await moto.save();
    res.status(201).json(moto);
  } catch (err) {
    next(err);
  }
};

exports.updateMoto = async (req, res, next) => {
  try {
    const moto = await Moto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!moto) return res.status(404).json({ message: 'Moto no encontrada' });
    res.json(moto);
  } catch (err) {
    next(err);
  }
};

exports.deleteMoto = async (req, res, next) => {
  try {
    const moto = await Moto.findByIdAndDelete(req.params.id);
    if (!moto) return res.status(404).json({ message: 'Moto no encontrada' });
    res.json({ message: 'Moto eliminada' });
  } catch (err) {
    next(err);
  }
};
