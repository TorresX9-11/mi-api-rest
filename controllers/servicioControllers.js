const Servicio = require('../models/Servicio');

exports.getServicios = async (req, res, next) => {
  try {
    const servicios = await Servicio.find().populate('motoId').populate('userId');
    res.json(servicios);
  } catch (err) {
    next(err);
  }
};

exports.getServicioById = async (req, res, next) => {
  try {
    const servicio = await Servicio.findById(req.params.id).populate('motoId').populate('userId');
    if (!servicio) return res.status(404).json({ message: 'Servicio no encontrado' });
    res.json(servicio);
  } catch (err) {
    next(err);
  }
};

exports.createServicio = async (req, res, next) => {
  try {
    // Asignar el userId del usuario autenticado
    const servicioData = { ...req.body, userId: req.user.id };
    const servicio = new Servicio(servicioData);
    await servicio.save();
    res.status(201).json(servicio);
  } catch (err) {
    next(err);
  }
};

exports.updateServicio = async (req, res, next) => {
  try {
    const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servicio) return res.status(404).json({ message: 'Servicio no encontrado' });
    res.json(servicio);
  } catch (err) {
    next(err);
  }
};

exports.deleteServicio = async (req, res, next) => {
  try {
    const servicio = await Servicio.findByIdAndDelete(req.params.id);
    if (!servicio) return res.status(404).json({ message: 'Servicio no encontrado' });
    res.json({ message: 'Servicio eliminado' });
  } catch (err) {
    next(err);
  }
};
