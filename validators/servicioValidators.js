const Joi = require('joi');

const servicioSchema = Joi.object({
  motoId: Joi.string().required(),
  userId: Joi.string().optional(),
  descripcion: Joi.string().required(),
  fecha: Joi.date().required(),
  costo: Joi.number().required()
});

module.exports = { servicioSchema };
